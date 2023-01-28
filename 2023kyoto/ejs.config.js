module.exports = {
  locals: {
    site: {
      title: 'YAPC::Kyoto 2023',
      url: 'https://yapcjapan.org/2023kyoto/',
      description:
        'YAPCはYet Another Perl Conferenceの略で、Perlを軸としたITに関わる全ての人のためのカンファレンスです。',
      image: 'images/ogp-image.jpg',
    },
    guestSpeakers: [
      {
        photo: 'images/onishi.jpg',
        name: '大西 康裕',
        name_en: 'Yasuhiro Onishi',
        title: '株式会社はてな 取締役 組織・基盤開発本部長',
        description: '2001年に創業メンバーの1人として有限会社はてな（当時）にエンジニアとして入社。その後「はてなブログ」の立ち上げや事業化を指揮。はてなのサービス・システムの開発本部長を経て、2022年5月より現職。組織開発及びシステム基盤開発を統括する本部長と人事部長を兼任し、経験を活かした多角的な組織開発に取り組む。代表作は Devel::KYTProf',
      },
      {
        photo: 'images/nekokaku.jpg',
        name: '小林 篤',
        name_en: 'Atsushi Kobayashi',
        title: '株式会社ディー・エヌ・エー 常務執行役員',
        description: '法学部法律学科からエンジニアへ転身し、2011年にDeNAに入社。Mobageおよび協業プラットフォームの大規模システム開発、オートモーティブ事業本部の開発責任者を歴任。2018年より執行役員としてDeNAのエンジニアリングの統括を務め、2019年より常務執行役員 CTOとしてより経営レベルでの意思決定にかかわることと、技術・モノづくりの強化を担う。2020年より常務執行役員として技術領域を担当しつつ、メディカル領域の新規事業を担当。',
      },
      {
        photo: "images/uehara.jpg",
        name: "上原 哲太郎",
        name_en: "Tetsutaro Uehara",
        title: "立命館大学 情報理工学部 教授",
        description: "1990年代前半は京都大学においてftpサーバやftpmailサービスを管理。その時にftpmailやftpmirrorプログラムを自作したのがPerlライフの始まり。和歌山大学や京都大学で計算機センター教員としてシステム管理に従事。2011年総務省技官。通信規格と情報セキュリティ政策に従事。2013年より現職。京都・和歌山・滋賀各警察のサイバー犯罪対策アドバイザー。"
      },
      {
        photo: "images/miyawaki.jpg",
        name: "宮脇 正晴",
        name_en: "Miyawaki Masaharu",
        title: "立命館大学 法学部 教授",
        description: "知財財産研究所特別研究員、国際高等研究所特別研究員を経て、2003年4月から立命館大学法学部助教授（2007年4月より「准教授」に改称）。2011年4月から立命館大学法学部教授。専門は知的財産法と不正競争法。インターネット上の知的財産権侵害や、知的財産権侵害に対する損害賠償額の算定方法など、知的財産権に関して幅広く研究している。"
      },
      {
        photo: 'images/moznion.jpg',
        name: '川上 大喜',
        name_en: 'Taiki Kawakami / @moznion',
        title: '株式会社ソラコム シニアソフトウェアエンジニア',
        description: '2017年より株式会社ソラコムにて、セルラーコアネットワークを中心とする複数のソフトウェアコンポーネントの開発を担当。大学在学中の2013年よりLINE株式会社にてブログサービスや動画配信サービス、ウェブ広告配信システムなどの高トラフィックなウェブサービスの設計・開発に従事。2015年The Perl Foundation Grants Committee ProgramにてPerl::Lintが採択。builderscon Tokyo 2018にてベストスピーカー賞を受賞。',
      },
    ],
    sponsors: [
      {
        key: 'perl',
        class: 'basis-full',
        icon_class: 'max-w-[300px]',
        label: 'Perl Sponsors',
        companies: [
          {
            name: '株式会社ディー・エヌ・エー',
            image: 'dena.png',
            url: 'https://dena.com',
          },
          {
            name: '株式会社はてな',
            image: 'hatena.png',
            url: 'https://hatenacorp.jp/',
          },
          {
            name: '株式会社Helpfeel',
            image: 'helpfeel.png',
            url: 'https://corp.helpfeel.com/ja/home',
          },
          {
            name: '合同会社もりたつ技商',
            image: 'moritaz.png',
            url: 'https://corp.moritaz.com/',
          },
        ],
      },
      {
        key: 'gold',
        label: 'Gold Sponsors',
        class: 'basis-full',
        icon_class: 'max-w-[200px]',
        companies: [
          {
            name: '株式会社モバイルファクトリー',
            image: 'mobile-factory.png',
            url: 'https://www.mobilefactory.jp/',
          },
          {
            name: '株式会社フリークアウト',
            image: 'freakout.png',
            url: 'https://www.fout.co.jp/freakout/',
          },
          {
            name: 'さくらインターネット株式会社',
            image: 'sakura.png',
            url: 'https://www.sakura.ad.jp/',
          },
          {
            name: '株式会社PR TIMES',
            image: 'prtimes.png',
            url: 'https://developers.prtimes.jp/',
          },
          {
            name: '株式会社カヤック',
            image: 'kayac.png',
            url: 'https://www.kayac.com/company/infographics',
          },
          {
            name: 'コインチェック株式会社',
            image: 'coincheck.png',
            url: 'https://corporate.coincheck.com/',
          },
          {
            name: '合同会社Y.pm',
            image: 'ypm.png',
            url: 'https://www.ypm.llc/',
          },
        //   {
        //     name: '株式会社マネーフォワード',
        //     image: 'moneyforward.png',
        //     url: 'https://corp.moneyforward.com/',
        //   },
        ],
      },
      {
        key: 'silver',
        label: 'Silver Sponsors',
        class: 'basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: 'こだまリサーチ株式会社',
            image: 'kodama.png',
            url: 'https://www.kodamari.com/',
          },
          {
            name: '株式会社Diverse',
            image: 'diverse.png',
            url: 'https://diverse-inc.co.jp/',
          },
          {
            name: '株式会社ネコトーストラボ',
            image: 'neko-toast-lab.png',
            url: 'https://nekotoast-lab.com/',
          },
          {
            name: '株式会社コルシス',
            image: 'colsis.png',
            url: 'https://colsis.jp/',
          },
          {
            name: '合同会社HaveFunTech',
            image: 'havefuntech.png',
            url: 'https://have-fun.tech/',
          },
          {
            name: '株式会社Cubicroot',
            image: 'cubicroot.png',
            url: 'https://libsisimai.org/',
          },
          {
            name: 'hachioji.pm',
            image: 'hachioji.png',
            url: 'https://twitter.com/hachiojipm',
          },
          {
            name: 'Ossan.fm',
            image: 'ossanfm.png',
            url: 'https://ossan.fm',
          },
        ],
      },
      {
        key: 'lt-battle',
        label: 'LTバトル',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社ネコトーストラボ',
            image: 'neko-toast-lab.png',
            url: 'https://nekotoast-lab.com/',
          },
        ],
      },
      {
        key: 'naming-rights',
        label: 'ネーミングライツ',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社Helpfeel',
            image: 'helpfeel.png',
            url: 'https://corp.helpfeel.com/ja/home',
          },
        ],
      },
      {
        key: 'recording',
        label: '公開収録',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社Helpfeel',
            image: 'helpfeel.png',
            url: 'https://corp.helpfeel.com/ja/home',
          },
        ],
      },
      {
        key: 'signboard',
        label: '案内看板',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社Helpfeel',
            image: 'helpfeel.png',
            url: 'https://corp.helpfeel.com/ja/home',
          },
        ],
      },
      {
        key: 't-shirt',
        label: 'Tシャツ',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: 'hachioji.pm',
            image: 'hachioji.png',
            url: 'https://twitter.com/hachiojipm',
          },
        ],
      },
      {
        key: 'tote-bag',
        label: 'トートバック',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社はてな',
            image: 'hatena.png',
            url: 'https://hatenacorp.jp/',
          },
        ],
      },
      {
        key: 'name-tag',
        label: '名札',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: 'Ossan.fm',
            image: 'ossanfm.png',
            url: 'https://ossan.fm',
          },
        ],
      },
      {
        key: 'student-support',
        label: '学生支援',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社はてな',
            image: 'hatena.png',
            url: 'https://hatenacorp.jp/',
          },
          {
            name: '合同会社もりたつ技商',
            image: 'moritaz.png',
            url: 'https://corp.moritaz.com/',
          },
          {
            name: '合同会社Y.pm',
            image: 'ypm.png',
            url: 'https://www.ypm.llc/',
          },
        ],
      },
      {
        key: 'best-talk',
        label: 'ベストトーク',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: '株式会社コルシス',
            image: 'colsis.png',
            url: 'https://colsis.jp/',
          },
        ],
      },
      {
        key: 'best-lt',
        label: 'ベストLT',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: 'さくらインターネット株式会社',
            image: 'sakura.png',
            url: 'https://www.sakura.ad.jp/',
          },
        ],
      },
      {
        key: 'guest',
        label: 'ゲスト',
        class: 'md:basis-64 basis-full',
        icon_class: 'max-w-[150px]',
        companies: [
          {
            name: 'hachioji.pm',
            image: 'hachioji.png',
            url: 'https://twitter.com/hachiojipm',
          },
        ],
      },
    ],
  },
};
