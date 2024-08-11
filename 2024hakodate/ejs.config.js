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
    ],
    specialEventSpeakers: [
      {
        photo: "./images/special/kumikumitm.jpg",
        name: "三谷 公美",
        name_en: "id:kumikumitm",
        description:
          "一般社団法人LOCAL理事を務めるほか、北海道地域情報セキュリティ連絡会（HAISL）副会長、北海道情報セキュリティ勉強会 (せきゅぽろ) 副代表、さくらインターネット株式会社エバンジェリストなど、さまざまな技術コミュニティやイベント運営に携わる。北海道、東京都を中心に活動している。",
      },
      {
        photo: "./images/special/onagatani.jpg",
        name: "永谷 理",
        name_en: "id:onagatani",
        title: "株式会社COLSIS 取締役CTO",
        description: `2000年から地元北海道でWEB関連のディレクションや制作に関わる。2006年から東京にてECサイトやポータルサイトのサーバーサイドエンジニアとして大規模トラフィックを扱う技術を経験。
Hokkaido.pmを2010年に立ち上げ、YAPC::Hokkaido 2016 SAPPOROはコアスタッフにて運営として参加。
現在はコルシス札幌支社に勤務しエンタープライズ系インフラ構築や、ECサイトなどのシステム開発に従事。`,
      },
      {
        photo: "./images/special/hokkai7go.jpg",
        name: "菅井 祐太朗",
        name_en: "id:hokkai7go",
        title: "一般社団法人LOCAL理事 / 株式会社I-Style取締役CTO",
        description: `大学を卒業後、メーカー系SIerにて主に官公庁向けの大規模システム運用に従事。
その後、WebインフラエンジニアやSREとして数社を経験し、2021年4月より現職。
著書に『Chef実践入門 ~コードによるインフラ構築の自動化 (WEB+DB PRESS plus)』(技術評論社.2014年.共著)がある。​
北見市生まれ。岩見沢市出身。`,
      },
      {
        photo: "./images/special/jumbo_hakodate.jpg",
        name: "中村 拓也",
        name_en: "id:jumbo_hakodate",
        description:
          "函館市在住。株式会社函館ラボラトリ （株式会社アットウェア の子会社）でコワーキングスペースと子供向けの工作・プログラミングを運営。ITコミュニティはこだてIKA や Code for Hakodate のメンバーとしても活動中。",
      },
      {
        photo: "./images/special/chiku_wait.jpg",
        name: "中田 裕貴",
        name_en: "id:chiku_wait",
        title:
          "さくらインターネット株式会社さくらインターネット研究所研究員 / 公立はこだて未来大学　大学院システム情報科学研究科　博士（後期）課程",
        description: `
2022年に公立はこだて未来大学　大学院博士（前期）課程を修了し、さくらインターネット株式会社に新卒入社。2024年より大学院博士（後期）課程に社会人学生として進学。 さくらインターネット研究所と大学院では、クラウドやエッジコンピューティングにおけるOSや仮想化技術など、システムソフトウェアに関する研究に従事。大学進学をきっかけに北海道に移住し、現在は札幌市在住。`,
      },
    ],
  },
};
