(function (Vue, $) {
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

  var PendingTalks = new Vue({
    el: '#accepted-talks',
    data: {
      talks: fetchTalkProposals('accepted')
    }
  });
})(Vue, $);
