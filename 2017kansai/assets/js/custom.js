(function (Vue, $) {
  var TRACKS = [
    { "id": "track-a", "name": "A会場" },
    { "id": "track-b", "name": "B会場" },
    { "id": "track-c", "name": "C会場" },
  ];
  var TRACK_COUNT = TRACKS.length;
  var JSON_URL = {
    accepted: 'https://spreadsheets.google.com/feeds/list/1e16uUbDJGclGdrJzVl-EFr8ns2J3S2WNaAEA151NsQk/on6oryq/public/values?alt=json',
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
    this.articleId   = 'talk-'+this.id;
    this.url         = './talks.html#'+encodeURIComponent(this.articleId);
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
        author:    entry['gsx$author']['$t'],
        githubId:  entry['gsx$githubid']['$t'],
        twitterId: entry['gsx$twitterid']['$t'],
        blogUrl:   entry['gsx$blogurl']['$t']
      }
    });
  }

  function fetchTalkProposals (type, cb) {
    var url = JSON_URL[type];

    var talks = [];
    $.get(url, function (json) {
      var entries = json.feed.entry;
      for (var i = 0, l = entries.length; i < l; i ++) {
        var entry = entries[i];
          var talk = parseEntry(entry);
        talks.push(talk);
      }
      if (cb) cb(talks);
    });

    return talks;
  }

  function fetchTimeTables() {
    var url = JSON_URL.accepted;

    var timetable = [];
    $.get(url, function (json) {
      var entries = json.feed.entry;
      var i, l, j;

      // { "09:00": { "track-a": { "title": "...", "durationMinutes": 20 } } }
      var timetableMap = {
        // FIXME: あとでちゃんとする
        "10:20": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 深沢 千尋",
            author: "深沢 千尋",
            durationMinutes: 40
          }
        },
        "13:40": {
          "track-a": {
            url: "./#guest-speakers",
            title: "GUEST: 木本 裕紀",
            author: "木本 裕紀",
            durationMinutes: 60
          }
        },
        "14:50": {
          "track-a": {
            url: "./#special-session",
            title: "GUEST: スペシャルセッション",
            author: "小飼 弾",
            durationMinutes: 60
          }
        }
      };
      for (i = 0, l = entries.length; i < l; i ++) {
        var entry = entries[i];
        var talk = parseEntry(entry);
        timetableMap[talk.startAt] = timetableMap[talk.startAt] || {};
        timetableMap[talk.startAt][talk.trackId] = _.extend(talk, { author: talk.author.name });
      }

      var lastEndAt;
      var times = _.keys(timetableMap).sort();
      _.forEach(times, function (startAt) {
        if (lastEndAt != null && startAt > lastEndAt) {
          // it means break time
          timetable.push({
            label: [lastEndAt, startAt].join(" ~ "),
            breakTime: true
          });
        }
        var durationMinutesList = _.chain(timetableMap[startAt]).values().map(function (talk) { return talk.durationMinutes; }).value();
        var minDurationMinutes  = Math.min.apply(Math, durationMinutesList);
        var endAt = moment([1970, 1, 1].concat(startAt.split(":"))).add(minDurationMinutes, "minutes").format("HH:mm");
        lastEndAt = endAt;

        var rowTracks = {};
        _.forEach(TRACKS, function (track) {
          if (!(track.id in timetableMap[startAt])) {
            return;
          }

          var detail = timetableMap[startAt][track.id];

          // XXX: atamawarui and nemui
          var rowspan = detail.durationMinutes / minDurationMinutes;
          if (startAt === "14:50" && track.id === "track-a") {
            rowspan = 2;
          }

          rowTracks[track.id] = {
            title: detail.title,
            author: detail.author,
            url: detail.url,
            durationMinutes: detail.durationMinutes,
            rowspan: rowspan
          };
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

  var AcceptedTalks = new Vue({
    el: '#accepted-talks',
    data: {
      talks: fetchTalkProposals('accepted')
    }
  });

  var Timetable = new Vue({
    el: '#timetable',
    data: fetchTimeTables()
  });

  // pusedo hash link
  $(function(){
    var $window = $(window);
    var $body = $(document.body);
    var isPC = $window.width() >= 900;
    var margin = isPC ? 30 : 10;
    var $header = isPC ? $("#gnavi") : $("#header");
    var adjust = function () {
      var $target = $(location.hash);
      if ($target.length) {
        $body.scrollTop(
          $target.offset().top - ( $header.height() + margin )
        );
      }
    };
    $window.on('hashchange', adjust);
    if (location.hash !== "") {
      setTimeout(adjust, 600);
    }
  });
})(Vue, $);
