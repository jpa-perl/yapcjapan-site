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

  function fetchTalkProposals (type, cb) {
    var url = JSON_URL[type];

    var talks = [];
    $.get(url, function (json) {
      var entries = json.feed.entry;
      for (var i = 0, l = entries.length; i < l; i ++) {
        var entry = entries[i];
        var talk = {
          id:          entry['gsx$id']['$t'],
          title:       entry['gsx$title']['$t'],
          description: entry['gsx$description']['$t'],
          time:        entry['gsx$talktime']['$t'],
          author: {
            name:      entry['gsx$author']['$t'],
            githubId:  entry['gsx$githubid']['$t'],
            twitterId: entry['gsx$twitterid']['$t'],
            blogUrl:   entry['gsx$blogurl']['$t']
          }
        };

        // noramlize
        talk.author.twitterId = talk.author.twitterId.replace(/\s+/g, '');
        talk.author.githubId  = talk.author.githubId.replace(/\s+/g, '');

        // sanitize
        if (! talk.author.blogUrl.match(/^https?:/)) {
          // It makes XSS maybe, so ignored.
          talk.author.blogUrl = null;
        }

        // convert id to url
        talk.author.githubUrl  = "https://github.com/"+encodeURIComponent(talk.author.githubId);
        talk.author.twitterUrl = "https://twitter.com/"+encodeURIComponent(talk.author.twitterId);

        talk.articleId = 'talk-'+talk.id;
        talk.url       = '#'+encodeURIComponent(talk.articleId);

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
        var startAt = entry['gsx$startat']['$t'];
        var trackId = entry['gsx$trackid']['$t'];
        timetableMap[startAt] = timetableMap[startAt] || {};
        timetableMap[startAt][trackId] = {
          url:             "./talks.html#talk-"+encodeURIComponent(entry['gsx$id']['$t']),
          title:           entry['gsx$title']['$t'],
          author:          entry['gsx$author']['$t'],
          durationMinutes: parseInt(entry['gsx$talktime']['$t'])
        };
      }

      var startAt, endAt, talkEndAt, durationMinutes;
      var times = Object.keys(timetableMap).sort();
      for (i = 0, l = times.length; i < l; i++) {
        startAt = times[i];
        if (endAt != null && startAt > endAt) {
          // it means break time
          timetable.push({
            label: [endAt, startAt].join(" ~ "),
            breakTime: true
          });
        }
        var durationMinutesList  = Object.values(timetableMap[startAt]).map(function (talk) { return talk.durationMinutes; });
        var minDurationMinutes   = Math.min.apply(Math, durationMinutesList);
        endAt = moment([1970, 1, 1].concat(startAt.split(":"))).add(minDurationMinutes, "minutes").format("HH:mm");

        var rowTracks = {};
        for (j = 0; j < TRACK_COUNT; j++) {
          var trackId = TRACKS[j].id;
          if (!(trackId in timetableMap[startAt])) {
            continue;
          }

          var detail = timetableMap[startAt][trackId];

          // XXX: atamawarui and nemui
          var rowspan = detail.durationMinutes / minDurationMinutes;
          if (startAt === "14:50" && trackId === "track-a") {
            rowspan = 2;
          }

          rowTracks[trackId] = {
            title: detail.title,
            author: detail.author,
            url: detail.url,
            durationMinutes: detail.durationMinutes,
            rowspan: rowspan
          };
        }
        timetable.push({
          label: [startAt, endAt].join(" ~ "),
          breakTime: false,
          tracks: rowTracks
        });
      }
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
