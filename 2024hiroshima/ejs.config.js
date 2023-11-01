const jobboards = require("./data/jobboards.js");
const staff = require("./data/staff.js");
const individualSponsors = require("./data/individual-sponsors.js");

module.exports = {
  locals: {
    site: {
      title: "YAPC::Hiroshima 2024",
      url: "https://yapcjapan.org/2024hiroshima/",
      description:
        "YAPCはYet Another Perl Conferenceの略で、Perlを軸としたITに関わる全ての人のためのカンファレンスです。",
      image: "images/ogp-image.jpg",
    },
    information: [
      {
        date: "2023/10/24",
        title: "タイムテーブルを公開しました",
        url: "https://fortee.jp/yapc-hiroshima-2024/timetable",
      },
      {
        date: "2023/10/10",
        title: "チケット販売を開始しました",
        url: "https://passmarket.yahoo.co.jp/event/show/detail/02y81p2r6ab31.html",
      },
      {
        date: "2023/09/11",
        title: "スポンサーメニューを公開しました",
        url: "https://fortee.jp/yapc-hiroshima-2024/go/sponsor-menu",
      },
    ],
    guestSpeakers: [
      {
        photo: "images/speakers/tohoho.jpg",
        name: "杜甫々",
        name_en: "Tohoho",
        title: "「とほほのWWW入門」サイト管理者",
        description:
          "1988年大学卒業後IT関連会社に入社。1996年から個人活動としてWebに関わる技術情報の発信サイト「とほほのWWW入門」を運営してきました。HTML/JavaScript/CSS、各種プログラミング言語、フレームワークなどの入門情報を発信しています。最近はWeb技術もネタが尽きてきて陶磁器、洋楽、中国語、韓国語、タイ料理など様々な「○○入門」の発信に手を出しつつあります。",
      },
      {
        photo: "images/speakers/sodai.jpg",
        name: "曽根 壮大",
        name_en: "Taketomo Sone",
        title: "合同会社 Have Fun Tech 代表社員 / 株式会社 Linkage CTO",
        description:
          "数々の業務システム、Webサービスなどの開発・運用を担当し、2017年に株式会社はてなでサービス監視サービス「Mackerel」のCRE（Customer Reliability Engineer）、株式会社オミカレの副社長/CTOなどを経て、合同会社 Have Fun Techを起業。 その後、LinkageのCTOとしてJOINし、HaveFunTechの経営と二足の草鞋を履きこなしている。 コミュニティでは、Microsoft MVPをはじめ、日本PostgreSQLユーザ会の理事として勉強会の開催を担当し、各地で登壇している。 builderscon 2017、YAPC::Kansaiなどのイベントでベストスピーカーを受賞し、分かりやすく実践的な内容のトークに定評がある。 他に、岡山Python勉強会を主催し、オープンラボ備後にも所属。著書に『Software Design』誌で、データベースに関する連載「RDBアンチパターン」をまとめた『失敗から学ぶRDBの正しい歩き方』を執筆",
      },
      {
        photo: "images/speakers/matsumoto.png",
        name: "松本 勇気",
        name_en: "Yuki Matsumoto",
        title: "株式会社LayerX 代表取締役CTO",
        description:
            "東京大学在学時に株式会社Gunosy入社、CTOとして技術組織全体を統括。またLayerXの前身となるブロックチェーン研究開発チームを立ち上げる。2018年より合同会社DMM.com CTOに就任し技術組織改革を推進。大規模Webサービスの構築をはじめ、機械学習、Blockchain、マネジメント、人事、経営管理、事業改善、行政支援等広く歴任。2019年日本CTO協会理事に就任。2021年3月よりLayerX 代表取締役CTO就任。開発や組織づくり、及びFintechとAI・LLMの2事業の推進を担当。"
      },
      {
        photo: "images/speakers/twada.png",
        name: "和田卓人",
        name_en: "Takuto Wada",
        title: "プログラマ、テスト駆動開発者",
        description: "学生時代にソフトウェア工学を学び、オブジェクト指向分析/設計に傾倒。執筆活動や講演、ハンズオンイベントなどを通じてテスト駆動開発を広めようと努力している。 『プログラマが知るべき97のこと』（オライリージャパン、2010）監修。『SQLアンチパターン』（オライリージャパン、2013）監訳。『テスト駆動開発』（オーム社、2017）翻訳。『事業をエンジニアリングする技術者たち』（ラムダノート、2022）編者。テストライブラリ power-assert-js 作者。"
      },
      {
        photo: "images/speakers/naoya.jpeg",
        name: "伊藤 直也",
        name_en: "Naoya Ito",
        title: "株式会社一休 執行役員CTO",
        description: "青山学院大学大学院修了後、ニフティ株式会社、株式会社はてな取締役CTOなどを経て2016年4月に株式会社 一休に入社、執行役員CTOに就任（現職）。\n",
      },
    ],
    jobboards,
    sponsors: [
      {
        key: 'perl',
        class: 'basis-full',
        icon_class: 'max-w-[300px]',
        label: 'Perl Sponsors',
        companies: [
          {
            name: '株式会社ディー・エヌ・エー',
            url: 'https://engineering.dena.com/',
            image: 'dena.png',
          },
          {
            name: '株式会社Helpfeel',
            url: 'https://corp.helpfeel.com/ja/home',
            image: 'helpfeel.png'
          },
          {
            name: '株式会社ドリーム・アーツ',
            url: 'https://www.dreamarts.co.jp/',
            image: 'dreamarts.png'
          }
        ],
      },
      {
        key: 'Platinum',
        class: 'basis-full',
        icon_class: 'max-w-[200px]',
        label: 'Platinum Sponsors',
        companies: [
          {
            name: 'シックス・アパート株式会社',
            url: 'https://www.sixapart.jp/',
            image: 'six-apart.png'
          },
          {
            name: '株式会社LayerX',
            url: 'https://layerx.co.jp/',
            image: 'layerx.png'
          },
        ],
      },
      {
        key: 'Gold',
        class: 'basis-full',
        icon_class: 'max-w-[150px]',
        label: 'Gold Sponsors',
        companies: [
          {
            name: '株式会社はてな',
            url: 'https://hatena.co.jp',
            image: 'hatena.png'
          },
          {
            name: '株式会社ハイヤールー',
            url: 'https://hireroo.io/',
            image: 'hireroo.png'
          },
          {
            name: '株式会社モバイルファクトリー',
            url: 'https://www.mobilefactory.jp/',
            image: 'mobile-factory.png'
          },
          {
            name: '株式会社Diverse',
            url: 'https://diverse-inc.co.jp/',
            image: 'diverse.png'
          },
          {
            name: '株式会社SmartHR',
            url: 'https://hello-world.smarthr.co.jp/',
            image: 'smarthr.png'
          },
          {
            name: "さくらインターネット株式会社",
            url: "https://www.sakura.ad.jp/",
            image: 'sakura.png'
          },
          {
            name: 'Y.pm',
            url: 'https://www.ypm.llc/',
            image: 'ypm.png'
          },
          {
            name: '面白法人カヤック',
            url: 'https://hubspot.kayac.com/engineer-interviews',
            image: 'kayac.png'
          },
          {
            name: '株式会社タイミー',
            url: 'https://timee.notion.site/Timee-Product-Org-Entrance-Book-b7380eb4f6954e29b2664fe6f5e775f9',
            image: 'timee.png'
          },
          {
            name: 'codoc株式会社',
            url: 'https://codoc.jp',
            image: 'codoc.png'
          },
          {
            name: '株式会社ネコトーストラボ',
            url: 'https://nekotoast-lab.com',
            image: 'neko-toast-lab.png'
          },
          {
            name: '株式会社フリークアウト',
            url: 'https://www.fout.co.jp/freakout/',
            image: 'freakout.png'
          }
        ],
      },
      {
        key: 'Silver',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'Silver Sponsors',
        companies: [
          {
            name: 'こだまリサーチ株式会社',
            url: 'https://www.kodamari.com/',
            image: 'kodamari.png',
          },
          {
            name: "合同会社もりたつ技商",
            url: "https://corp.moritaz.com/",
            image: 'moritaz.png'
          },
          {
            name: 'NOT A HOTEL株式会社',
            url: 'https://notahotel.com/',
            image: 'not-a-hotel.png'
          },
          {
            name: 'kobaken',
            url: 'https://twitter.com/kfly8',
            image: 'kobaken.png'
          },
          {
            name: '八雲アナグラ',
            url: 'https://anatofuz.net',
            image: 'anatofuz.png'
          },
          {
            name: '合同会社HaveFunTech',
            url: 'https://have-fun.tech/',
            image: 'have-fun-tech.png'
          },
          {
            name: '株式会社COLSIS',
            url: 'https://colsis.jp',
            image: 'colsis.png'
          }
        ],
      },
      {
        key: 'Hiroshima',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'ご当地広島スポンサー',
        companies: [
          {
            name: '株式会社シュアルタ',
            url: 'https://www.shuaruta.com/',
            image: 'shuaruta.png',
          },
          {
            name: '株式会社stak',
            url: 'https://stak.tech/',
            image: 'stak.png'
          }
        ],
      },
      {
        key: 'Chair',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: '椅子スポンサー',
        companies: [
          {
            name: '面白法人カヤック',
            url: 'https://hubspot.kayac.com/engineer-interviews',
            image: 'kayac.png'
          }
        ],
      },
      {
        key: 'Booth',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'ブーススポンサー',
        companies: [
          {
            name: '株式会社Helpfeel',
            url: 'https://corp.helpfeel.com/ja/home',
            image: 'helpfeel.png'
          },
          {
            name: '株式会社ハイヤールー',
            url: 'https://hireroo.io/',
            image: 'hireroo.png'
          },
          {
            name: '株式会社SmartHR',
            url: 'https://hello-world.smarthr.co.jp/',
            image: 'smarthr.png'
          },
          {
            name: "さくらインターネット株式会社",
            url: "https://www.sakura.ad.jp/",
            image: 'sakura.png'
          },
          {
            name: "株式会社タイミー",
            url: "https://timee.notion.site/Timee-Product-Org-Entrance-Book-b7380eb4f6954e29b2664fe6f5e775f9",
            image: 'timee.png'
          },
        ],
      },
      {
        key: 'Lunch',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: '広島名物ランチセッション',
        companies: [
          {
            name: '株式会社Helpfeel',
            url: 'https://corp.helpfeel.com/ja/home',
            image: 'helpfeel.png'
          },
        ],
      },
      {
        key: 'best-lt',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'ベストLT',
        companies: [
          {
            name: '株式会社フリークアウト',
            url: 'https://www.fout.co.jp/freakout/',
            image: 'freakout.png',
          },
        ],
      },
      {
        key: 'StudentSupportSymposium',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: '学生支援 座談会＋記事広告',
        companies: [
          {
            name: "株式会社LayerX",
            url: "https://layerx.co.jp/",
            image: 'layerx.png'
          },
        ],
      },
      {
        key: 'StudentSupport',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: '学生支援 記事広告',
        companies: [
          {
            name: '株式会社モバイルファクトリー',
            url: 'https://www.mobilefactory.jp/',
            image: 'mobile-factory.png'
          },
          {
            name: 'こだまリサーチ株式会社',
            url: 'https://www.kodamari.com/',
            image: 'kodamari.png',
          },
          {
            name: "合同会社もりたつ技商",
            url: "https://corp.moritaz.com/",
            image: 'moritaz.png'
          },
          {
            name: "八雲アナグラ",
            url: "https://anatofuz.net",
            image: 'anatofuz.png'
          },
        ],
      },
      {
        key: 'coffee',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'コーヒーブース',
        companies: [
          {
            name: '株式会社はてな',
            url: 'https://hatena.co.jp',
            image: 'hatena.png'
          },
        ],
      },
      {
        key: 'after-party',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: '懇親会',
        companies: [
          {
            name: '株式会社ドリーム・アーツ',
            url: 'https://www.dreamarts.co.jp/',
            image: 'dreamarts.png'
          },
        ],
      },
      {
        key: 'morning',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'モーニング（むさしのむすび）',
        companies: [
          {
            name: '株式会社ディー・エヌ・エー',
            url: 'https://engineering.dena.com/',
            image: 'dena.png',
          },
        ],
      },
      {
        key: 'after-event',
        class: 'basis-full',
        icon_class: 'max-w-[100px]',
        label: 'アフターイベント',
        companies: [
          {
            name: 'kobaken',
            url: 'https://twitter.com/kfly8',
            image: 'kobaken.png',
          },
        ],
      },
    ],
    staff,
    individualSponsors,
  },
};
