const sponsors = require("./data/sponsors.js");
const jobboards = require("./data/jobboards.js");
const staff = require("./data/staff.js");
const individualSponsors = require("./data/individual-sponsors.js");

module.exports = {
  locals: {
    announcements: [
      {
        date: "2024.06.17",
        title: "YAPC::Hakodate 2024のスピーカーを募集します",
        url: "https://blog.yapcjapan.org/entry/2024/06/17/150000",
      },
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
    guestSpeakers: [
      {
        photo: "https://i.pravatar.cc/300",
        name: "杜甫々",
        name_en: "Tohoho",
        title: "「とほほのWWW入門」サイト管理者",
        description:
          "1988年大学卒業後IT関連会社に入社。1996年から個人活動としてWebに関わる技術情報の発信サイト「とほほのWWW入門」を運営してきました。HTML/JavaScript/CSS、各種プログラミング言語、フレームワークなどの入門情報を発信しています。最近はWeb技術もネタが尽きてきて陶磁器、洋楽、中国語、韓国語、タイ料理など様々な「○○入門」の発信に手を出しつつあります。",
      },
      {
        photo: "https://i.pravatar.cc/300",
        name: "曽根 壮大",
        name_en: "Taketomo Sone",
        title: "合同会社 Have Fun Tech 代表社員 / 株式会社 Linkage CTO",
        description:
          "数々の業務システム、Webサービスなどの開発・運用を担当し、2017年に株式会社はてなでサービス監視サービス「Mackerel」のCRE（Customer Reliability Engineer）、株式会社オミカレの副社長/CTOなどを経て、合同会社 Have Fun Techを起業。 その後、LinkageのCTOとしてJOINし、HaveFunTechの経営と二足の草鞋を履きこなしている。 コミュニティでは、Microsoft MVPをはじめ、日本PostgreSQLユーザ会の理事として勉強会の開催を担当し、各地で登壇している。 builderscon 2017、YAPC::Kansaiなどのイベントでベストスピーカーを受賞し、分かりやすく実践的な内容のトークに定評がある。 他に、岡山Python勉強会を主催し、オープンラボ備後にも所属。著書に『Software Design』誌で、データベースに関する連載「RDBアンチパターン」をまとめた『失敗から学ぶRDBの正しい歩き方』を執筆",
      },
      {
        photo: "https://i.pravatar.cc/300",
        name: "曽根 壮大",
        name: "松本 勇気",
        name_en: "Yuki Matsumoto",
        title: "株式会社LayerX 代表取締役CTO",
        description:
          "東京大学在学時に株式会社Gunosy入社、CTOとして技術組織全体を統括。またLayerXの前身となるブロックチェーン研究開発チームを立ち上げる。2018年より合同会社DMM.com CTOに就任し技術組織改革を推進。大規模Webサービスの構築をはじめ、機械学習、Blockchain、マネジメント、人事、経営管理、事業改善、行政支援等広く歴任。2019年日本CTO協会理事に就任。2021年3月よりLayerX 代表取締役CTO就任。開発や組織づくり、及びFintechとAI・LLMの2事業の推進を担当。",
      },
      {
        photo: "https://i.pravatar.cc/300",
        name: "和田 卓人",
        name_en: "Takuto Wada",
        title: "プログラマ、テスト駆動開発者",
        description:
          "学生時代にソフトウェア工学を学び、オブジェクト指向分析/設計に傾倒。執筆活動や講演、ハンズオンイベントなどを通じてテスト駆動開発を広めようと努力している。 『プログラマが知るべき97のこと』（オライリージャパン、2010）監修。『SQLアンチパターン』（オライリージャパン、2013）監訳。『テスト駆動開発』（オーム社、2017）翻訳。『事業をエンジニアリングする技術者たち』（ラムダノート、2022）編者。テストライブラリ power-assert-js 作者。",
      },
      {
        photo: "https://i.pravatar.cc/300",
        name: "伊藤 直也",
        name_en: "Naoya Ito",
        title: "株式会社一休 執行役員CTO",
        description:
          "青山学院大学大学院修了後、ニフティ株式会社、株式会社はてな取締役CTOなどを経て2016年4月に株式会社 一休に入社、執行役員CTOに就任（現職）。\n",
      },
    ],
  },
};
