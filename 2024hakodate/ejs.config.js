const sponsors = require("./data/sponsors.js");
const jobboards = require("./data/jobboards.js");
const staff = require("./data/staff.js");
const individualSponsors = require("./data/individual-sponsors.js");

module.exports = {
  locals: {
    announcements: [
      {
        date: "2024.07.13",
        title: "YAPC::Hakodate 2024のチケットを販売いたします!!!",
        url: "https://blog.yapcjapan.org/entry/hakodate-2024-ticket",
      },
      {
        date: "2024.05.24",
        title: "YAPC::Hakodate 2024 ご協賛のお願い",
        url: "https://blog.yapcjapan.org/entry/2024/05/24/170000",
      },
    ],
    guestSpeakers: [],
    specialSessionSpeakers: [],
    sponsors,
    staff,
    individualSponsors,
    jobboards,
    guestSpeakers: [
      {
        photo: "./images/speaker/moznion.jpg",
        name: "moznion",
        name_en: "Moznion",
        title: "株式会社スマートバンク ソフトウェアエンジニア",
        description: `
大学在学中の2013年よりLINE株式会社にてブログサービスや動画配信サービス、ウェブ広告配信システムなどの高トラフィックなウェブサービスの設計・開発に従事。その後、2017年に異業種であるテレコムスタートアップの株式会社ソラコムに転職し、セルラーコアネットワークを中心とする複数のソフトウェアコンポーネントの設計・開発を担当。
2024年6月より現職。家計簿プリカ「B/43」を中心としたソフトウェアプロダクトの開発を行なっている。
2015年The Perl Foundation Grants Committee ProgramにてPerl::Lintが採択。builderscon Tokyo 2018にてベストスピーカー賞を受賞。北海道函館市出身。
          `,
      },
      {
        photo: "./images/speaker/akiym.png",
        name: "akiym",
        name_en: "Takumi Akiyama",
        title: "株式会社Flatt Security セキュリティエンジニア",
        description: `
2017年に新卒で株式会社はてなにソフトウェアエンジニアとして入社後、2021年より現職に入社し、セキュリティエンジニアにキャリアチェンジ。SECCON2015学生大会、SECCON2018・2019国内大会で優勝するなど、以降多数の実績を納める。Perlとの出会いは小学生のときにKENT WEBの掲示板を触ったことから。YAPC::Asia/YAPC::Japanにて2011年より計6回登壇、CPAN Author。
        `,
      },
      {
        photo: "./images/speaker/sumi-prof.jpg",
        name: "角 康之",
        name_en: "Yasuyuki Sumi",
        title: "公立はこだて未来大学 教授",
        description: `
早稲田大学、東京大学大学院を修了後、ATR研究員、京都大学准教授を経て、2011年からはこだて未来大学教授。
体験メディア、インタラクションの理解とデザイン、ライフログなどの研究と教育に従事。
        `,
      },
      {
        photo: "./images/speaker/dr-fukamachi.jpg",
        name: "深町 賢一",
        name_en: "Ken'ichi Fukamachi",
        title: "公立千歳科学技術大学",
        description: `フリーソフトウエア開発者で元インフラエンジニア。
IIJ(最初の商用インターネットサービスプロバイダ)の現場で十数年つとめたあと、できるだけ実務に即したITインフラストラクチャを大学で教えようとしている。
よく使う言語は、シェルスクリプトとPerl。
30年来のメインの生活環境はBSD Unix(NEWS-OS 4.x, NetBSD 0.8-)で、最近は(ssh元兼GUI環境として)Debian GNU Linuxも併用。
今回の講演では、"シェルとPerlの使い分け"を、実生活環境のログ分析をもとに話はじめて、Unixとコンピュータ開発史をふりかえりつつ、先のことを考えてみる予定。`
      }
    ],
  },
};
