(function (Vue, $) {
  var TRACKS = [
    { "id": "track-a", "name": "A会場" },
    { "id": "track-b", "name": "B会場" },
    { "id": "track-c", "name": "C会場" },
  ];
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
    this.author      = new Speaker(entry.author);

    this.durationMinutes = parseInt(this.time);
    this.url         = '#/detail/'+encodeURIComponent(this.id);
    this.isGuest     = false;
  }

  function calculateEndAt(startAt, durationMinutes) {
    return moment([1970, 1, 1].concat(startAt.split(":"))).add(durationMinutes, "minutes").format("HH:mm");
  }

  function parseEntry(entry) {
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
        "10:20": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 深沢 千尋",
            author: "深沢 千尋",
            durationMinutes: 50,
            isGuest: true
          }
        },
        "13:40": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 木本 裕紀",
            author: "木本 裕紀",
            durationMinutes: 60,
            isGuest: true
          }
        },
        "14:50": {
          "track-a": {
            url: "./#special-session",
            title: "GUEST: スペシャルセッション",
            author: "小飼 弾",
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
            breakTimeColspan: (lastEndAt === "10:40" ? 2 : 3)
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
          if (startAt === "10:20" && track.id === "track-a") {
            rowspan = 3;
          } else if (startAt === "14:50" && track.id === "track-a") {
            rowspan = 2;
          }

          rowTracks[track.id] = _.extend(detail, { rowspan: rowspan });
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

  var TalkDetailModal = new Vue({
    el: '#talk-detail-modal',
    data: {
      render: false,
      talk: {}
    },
    methods: {
      open: function (talk) {
        this.talk = talk;
        this.render = true;
        setTimeout(function () {
          $('#talk-detail-modal').modal('show');
        }, 0);
      }
    }
  });

  var CommonMethods = {
    openModal: function (talk) {
      if (talk.isGuest) {
        location.href = talk.url;
        return;
      }
      location.hash = talk.url;
      TalkDetailModal.open(talk);
    }
  };

  var TalkList = new Vue({
    el: '#accepted-talks',
    data: {
      talks: fetchTalkProposals(DEFAULT_TARGET)
    },
    methods: _.extend(CommonMethods, {})
  });

  var Timetable = new Vue({
    el: '#timetable',
    data: fetchTimeTables(),
    methods: _.extend(CommonMethods, {})
  });

  var dispatcher = new MicroDispatcher();
  dispatcher.register('/detail/:id', function (id) {
    fetchTalkProposalById(DEFAULT_TARGET, id, function (talk) {
      TalkDetailModal.open(talk);
    });
  });
  dispatcher.dispatch(location.hash.substring(1));
})(Vue, $);
