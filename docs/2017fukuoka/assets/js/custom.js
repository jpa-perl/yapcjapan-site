(function (Vue, $) {
  var TRACKS = [
    { "id": "track-a", "name": "A会場" },
    { "id": "track-b", "name": "B会場" },
  ];
  var TRACKS_MAP  = _.keyBy(TRACKS, 'id');
  var TRACK_COUNT = TRACKS.length;
  var DEFAULT_TARGET = 'accepted';
  var JSON_URL = {
    accepted: './assets/data/accepted.json',
  };

  function Speaker(entry) {
    this.name      = entry.name;
    this.githubId  = entry.githubId;
    this.twitterId = entry.twitterId;
    this.blogUrl   = entry.blogUrl;

    // sanitize
    if (! this.blogUrl.match(/^https?:/)) {
      // It makes XSS maybe, so ignored.
      this.blogUrl = null;
    }

    // normalize
    this.twitterId = this.twitterId.replace(/\s+/g, '');
    this.githubId  = this.githubId.replace(/\s+/g, '');

    // convert id to url
    this.githubUrl  = "https://github.com/"+encodeURIComponent(this.githubId);
    this.twitterUrl = "https://twitter.com/"+encodeURIComponent(this.twitterId);
  }

  function Talk(entry) {
    this.id          = entry.id;
    this.title       = entry.title;
    this.description = entry.description;
    this.time        = entry.time;
    this.startAt     = entry.startAt;
    this.trackId     = entry.trackId;
    this.track       = TRACKS_MAP[this.trackId];
    this.author      = new Speaker(entry.author);

    this.durationMinutes = parseInt(this.time);
    this.endAt        = calculateEndAt(this.startAt, this.durationMinutes);
    this.articleId    = "talk-"+this.id;
    this.url          = '#/detail/'+encodeURIComponent(this.id);
    this.timetableUrl = './timetable.html'+this.url;
    this.isGuest      = false;
    this.highlight    = false;
  }

  function calculateEndAt(startAt, durationMinutes) {
    return moment([1970, 1, 1].concat(startAt.split(":"))).add(durationMinutes, "minutes").format("HH:mm");
  }

  function parseEntry(entry) {
    console.log(entry);
    return new Talk({
      id:          entry['gsx$id']['$t'],
      title:       entry['gsx$title']['$t'],
      description: entry['gsx$description']['$t'],
      time:        entry['gsx$talktime']['$t'],
      startAt:     entry['gsx$startat']['$t'],
      trackId:     entry['gsx$trackid']['$t'],
      author: {
        name:      entry['gsx$author']['$t'],
        githubId:  entry['gsx$githubid']['$t'],
        twitterId: entry['gsx$twitterid']['$t'],
        blogUrl:   entry['gsx$blogurl']['$t']
      }
    });
  }

  var fetchTalkProposals = (function () {
    var cache = {};
    return function (type, cb) {
      var cached = cache[type] = cache[type] || {
        completed: false,
        running:   false,
        talks:     [],
        cbque:     []
      };

      if (cached.completed) {
        if (cb) cb(cached.talks);
        return cached.talks;
      }
      else if (cached.running) {
        if (cb) cached.cbque.push(cb);
        return cached.talks;
      }

      var url = JSON_URL[type];
      var talks = [];
      $.get(url, function (json) {
        var entries = json.feed.entry;
        _.forEach(entries, function (entry) {
          var talk = parseEntry(entry);
          talks.push(talk);
        });
        cached.running = false;
        cached.completed = true;
        _.forEach(cached.cbque, function (cb) {
          cb(talks);
        });
        cached.cbque = [];
        if (cb) cb(talks);
      });

      cached.talks = talks;
      cached.running = true;
      return talks;
    };
  })();

  function fetchTalkProposalById(type, id, cb) {
    fetchTalkProposals(type, function (talks) {
      _.forEach(talks, function (talk) {
        if (talk.id === id) {
          cb(talk);
          return false;
        }
        return true;
      });
    });
  };

  function fetchTimeTables() {
    var timetable = [];
    fetchTalkProposals(DEFAULT_TARGET, function (talks) {
      // { "09:00": { "track-a": { "title": "...", "durationMinutes": 20 } } }
      var timetableMap = {
        // FIXME: あとでちゃんとする
        "10:40": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 徳丸 浩",
            author: "徳丸 浩",
            durationMinutes: 40,
            isGuest: true
          }
        },
        "13:40": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 鍛治 匠一",
            author: "鍛治 匠一",
            durationMinutes: 40,
            isGuest: true
          }
        },
        "14:50": {
          "track-a": {
            url: "./#special-session",
            title: "GUEST: スペシャルセッション",
            author: "",
            durationMinutes: 60,
            isGuest: true
          }
        }
      };
      _.forEach(talks, function (talk) {
        timetableMap[talk.startAt] = timetableMap[talk.startAt] || {};
        timetableMap[talk.startAt][talk.trackId] = talk;
      });

      var lastEndAt;
      var times = _.keys(timetableMap).sort();
      _.forEach(times, function (startAt) {
        if (lastEndAt != null && startAt > lastEndAt) {
          // it means break time
          timetable.push({
            label: [lastEndAt, startAt].join(" ~ "),
            breakTime: true,
            breakTimeColspan: 2
          });
        }
        var durationMinutesList = _.chain(timetableMap[startAt]).values().map(function (talk) { return talk.durationMinutes; }).value();
        var minDurationMinutes  = Math.min.apply(Math, durationMinutesList);
        var endAt = lastEndAt = calculateEndAt(startAt, minDurationMinutes);

        var rowTracks = {};
        _.forEach(TRACKS, function (track) {
          if (!(track.id in timetableMap[startAt])) {
            return;
          }

          var detail = timetableMap[startAt][track.id];

          // XXX: atamawarui and nemui
          var rowspan = detail.durationMinutes / minDurationMinutes;

          detail.rowspan = rowspan;
          rowTracks[track.id] = detail;
        });

        timetable.push({
          label: [startAt, endAt].join(" ~ "),
          breakTime: false,
          tracks: rowTracks
        });
      });
    });

    return {
      tracks: TRACKS,
      timetable: timetable
    };
  }

  var adjustScrollToTalk = (function () {
    var isPC = $(window).width() >= 900;
    var margin = isPC ? 30 : 10;
    var $header = isPC ? $("#gnavi") : $("#header");
    return function (talk) {
      var $talk = $('#'+talk.articleId);
      if ($talk.length > 0) {
        $(document.body).scrollTop(
          $talk.offset().top - ($header.height() + margin)
        );
      }
    };
  })();

  var TalkDetailModal = new Vue({
    el: '#talk-detail-modal',
    data: {
      render: false,
      showTimetableLink: false,
      talk: {}
    },
    methods: {
      open: function (talk, cb) {
        this.talk = talk;
        this.render = true;

        var $el = $(this.$el);
        $el.modal('show');
        if (cb) $el.one('hidden.bs.modal', cb);
      }
    }
  });

  // dispatch path
  (function () {
    var dispatcher = new MicroDispatcher();
    dispatcher.register('/:conference/talks.html', function () {
      var TalkList = new Vue({
        el: '#accepted-talks',
        data: {
          talks: fetchTalkProposals(DEFAULT_TARGET)
        },
        created: function () {
          TalkDetailModal.showTimetableLink = true;
        },
        methods: {
          openModal: function (talk) {
            adjustScrollToTalk(talk);
            location.hash = talk.url;
            TalkDetailModal.open(talk);
          }
        }
      });
    });
    dispatcher.register('/:conference/timetable.html', function () {
      var Timetable = new Vue({
        el: '#timetable',
        data: fetchTimeTables(),
        methods: {
          openModal: function (talk) {
            if (talk.isGuest) {
              location.href = talk.url;
              return;
            }
            location.hash = talk.url;
            talk.highlight = true;
            TalkDetailModal.open(talk, function () {
              talk.highlight = false;
            });
          }
        }
      });
    });
    console.log(location.pathname);
    dispatcher.dispatch(location.pathname);
  })();

  // dispatch hash path
  (function () {
    var dispatcher = new MicroDispatcher();
    dispatcher.register('/detail/:id', function (id) {
      fetchTalkProposalById(DEFAULT_TARGET, id, function (talk) {
        adjustScrollToTalk(talk);
        talk.highlight = true;
        TalkDetailModal.open(talk, function () {
          talk.highlight = false;
        });
      });
    });
    dispatcher.dispatch(location.hash.substring(1));
  })();
})(Vue, $);
