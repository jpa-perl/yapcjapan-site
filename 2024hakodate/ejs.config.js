const sponsors = require("./data/sponsors.js");
const jobboards = require("./data/jobboards.js");
const staff = require("./data/staff.js");
const individualSponsors = require("./data/individual-sponsors.js");

module.exports = {
  locals: {
    announcements: [
      {
        date: "2024.05.24",
        title: "YAPC::Hakodate 2024 ご協賛のお願い",
        url: "https://blog.yapcjapan.org/entry/2024/05/24/170000",
      },
    ],
    guestSpeakers: [],
    specialSessionSpeakers: [],
    jobboards,
    sponsors,
    staff,
    individualSponsors,
    jobboards,
  },
};
