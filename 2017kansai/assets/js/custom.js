// Blog Entries from atom feed
//
// (function (Vue, $) {
//   var BlogEntries = new Vue({
//     el: '#blog-entries',
//     data: {
//       loaded:  false,
//       entries: []
//     },
//     created: function () {
//       var v = this;
//       $.get('http://blog.yapcjapan.org/feed', function (xml) {
//         var entries = xml.getElementsByTagName("entry");
//         for (var i = 0, l = entries.length; i < l; i++) {
//           var title = (entries[i].getElementsByTagName("title"))[0].textContent;
//           var url   = (entries[i].getElementsByTagName("link"))[0].getAttribute('href');
//           var date  = (entries[i].getElementsByTagName("published"))[0].textContent.replace(/T.*/, '');
//           v.entries.push({ title: title, url: url, date: date });
//         }
//         v.loaded = true;
//       });
//     }
//   });
// })(Vue, $);
