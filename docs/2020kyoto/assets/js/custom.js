(function (Vue, $) {
  var TRACKS = [
    { "id": "track-a", "name": "ホール" },
    { "id": "track-b", "name": "ルーム1" },
    { "id": "track-c", "name": "ルーム2" },
  ];
  var TRACKS_MAP  = _.keyBy(TRACKS, 'id');
  var TRACK_COUNT = TRACKS.length;
  var DEFAULT_TARGET = 'accepted';
  var JSON_URL = {
    accepted: 'https://spreadsheets.google.com/feeds/list/1qf4vG7QTiWMGap_lpPi08rQifbx-Kuo77i-iU2k5Uds/on6oryq/public/values?alt=json',
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
    this.noLink       = false;
    this.hasQA        = true;
    this.qaDurationMinutes = Math.floor(this.durationMinutes / 4); // FIXME: てきとう
    this.qaEndAt      = calculateEndAt(this.endAt, this.qaDurationMinutes);
    this.totalDurationMinutes = this.durationMinutes + this.qaDurationMinutes;
    this.totalEndAt   = this.qaEndAt;
    this.highlight    = false;
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
        // FIXME: いつかちゃんとしたい
        "10:50": {
          "track-a": {
            url: "./#guest-speaker",
            title: "GUEST: 小林 篤",
            author: "小林 篤",
            durationMinutes: 40,
            isGuest: true,
            noLink: false,
            hasQA: true
          }
        },
        "11:50": {
          "track-a": {
            url: "./",
            title: "TBD",
            author: "TBD",
            durationMinutes: 50,
            isGuest: false,
            noLink: true,
            hasQA: false
          },
          "track-b": {
            url: "./#lunch-session",
            title: "ランチスポンサーセッション",
            author: "TBD",
            durationMinutes: 50,
            isGuest: false,
            noLink: true,
            hasQA: false
          },
          "track-c": {
            url: "./#lunch-session",
            title: "ランチスポンサーセッション",
            author: "TBD",
            durationMinutes: 50,
            isGuest: false,
            noLink: true,
            hasQA: false
          },
        },
        "13:05": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: TBD",
            author: "TBD",
            durationMinutes: 40,
            isGuest: true,
            noLink: false,
            hasQA: true
          }
        },
      };
      _.forEach(timetableMap, function (talksMap, startAt) {
        _.forEach(talksMap, function (talk, trackId) {
          talk.startAt = startAt;
          talk.trackId = trackId;
          talk.track   = TRACKS_MAP[trackId];
          talk.endAt   = calculateEndAt(startAt, talk.durationMinutes);
          if (talk.hasQA) {
            talk.qaDurationMinutes = Math.floor(talk.durationMinutes / 4); // FIXME: てきとう
            talk.qaEndAt           = calculateEndAt(talk.endAt, talk.qaDurationMinutes);
          } else {
            talk.qaDurationMinutes = 0;
            talk.qaEndAt           = talk.endAt;
          }
          talk.totalDurationMinutes = talk.durationMinutes + talk.qaDurationMinutes;
          talk.totalEndAt           = talk.qaEndAt;
        });
      });
      _.forEach(talks, function (talk) {
        timetableMap[talk.startAt] = timetableMap[talk.startAt] || {};
        timetableMap[talk.startAt][talk.trackId] = talk;
      });

      // timeBlocks = [{startAt: "09:50", endAt: "10:40", talksMap: {$startAt:{$trackId:$talk, ...}, ...}, qaMap: {$endAt:{$trackId:$talk, ...}, ...}}, ...]
      var timeBlocks = [];

      var times = _.keys(timetableMap).sort();
      var blockTemplate = {startAt: null, endAt: null, talksMap: {}, qaMap: {}};
      var startAtTable = {};  // {$startAt: true, ...}
      var lastEndAtTable = {}; // {$track-id: $talk.totalEndAt, ...}
      _.forEach(times, function (startAt) {
        if (blockTemplate.startAt == null) blockTemplate.startAt = startAt;

        var talksMap = timetableMap[startAt];
        _.forEach(TRACKS, function (track) {
          if (!(track.id in talksMap)) {
            return;
          }

          // push Talk
          var talk = talksMap[track.id];
          blockTemplate.talksMap[talk.startAt] = blockTemplate.talksMap[talk.startAt] || {};
          blockTemplate.talksMap[talk.startAt][track.id] = talk;

          // push QA
          if (talk.hasQA) {
            blockTemplate.qaMap[talk.endAt] = blockTemplate.qaMap[talk.endAt] || {};
            blockTemplate.qaMap[talk.endAt][track.id] = talk;
          }

          // update lastEndAtTable
          lastEndAtTable[track.id] = talk.totalEndAt;

          // update startAtTable
          startAtTable[talk.startAt] = true;
          if (talk.hasQA) {
            startAtTable[talk.endAt] = true;
          }
        });

        // check closed
        var lastEndAts = _.values(lastEndAtTable);
        var isClosed = lastEndAts.length === TRACKS.length && _.uniq(lastEndAts).length === 1;
        if (isClosed) {
          // push
          blockTemplate.endAt = lastEndAts[0];
          blockTemplate.timespans = _.keys(startAtTable).concat(blockTemplate.endAt).sort();
          timeBlocks.push(blockTemplate);

          // and reset
          blockTemplate = {startAt: null, endAt: null, talksMap: {}, qaMap: {}};
          startAtTable = {};
          lastEndAtTable = {};
        }
      });

      var lastEndAt = null;
      _.forEach(timeBlocks, function (timeBlock) {
        if (lastEndAt !== null && lastEndAt !== timeBlock.startAt) {
          // it means break time
          timetable.push({
            label: [lastEndAt, timeBlock.startAt].join(" ~ "),
            breakTime: true,
            breakTimeColspan: TRACK_COUNT,
          });
        }

        var blockEndAt = timeBlock.endAt;
        _.forEach(timeBlock.timespans, function (startAt, i) {
          if (timeBlock.timespans.length === i+1) return;

          var talksMap = timeBlock.talksMap[startAt] || {};
          var qaMap = timeBlock.qaMap[startAt] || {};
          var rowTracks = {};
          _.forEach(TRACKS, function (track) {
            if (!(track.id in talksMap) && !(track.id in qaMap)) {
              return;
            }

            var talk = talksMap[track.id];
            if (talk) {
              var rowspan = _.indexOf(timeBlock.timespans, talk.endAt, i) - i;
              rowTracks[track.id] = _.assign({}, talk, { rowspan: rowspan });
            }

            var qa = qaMap[track.id];
            if (qa) {
              var rowspan = _.indexOf(timeBlock.timespans, qa.qaEndAt, i) - i;
              rowTracks[track.id] = _.assign({}, qa, { // FIXME: やっつけ
                title: "Q&A",
                durationMinutes: qa.qaDurationMinutes,
                rowspan: rowspan,
                noLink: true,
                isQA: true,
              });
            }
          });

          // skip
          if (_.keys(rowTracks).length === 0) return;

          var endAt = timeBlock.timespans[i+1];
          timetable.push({
            label: [startAt, endAt].join(" ~ "),
            breakTime: false,
            tracks: rowTracks
          });
          lastEndAt = endAt;
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
            if (talk.noLink) return;
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
