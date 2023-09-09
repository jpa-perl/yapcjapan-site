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
    guestSpeakers: [
      {
        photo: "images/",
        name: "杜甫々",
        name_en: "Tohoho",
        title: "株式会社はてな 取締役 組織・基盤開発本部長",
        description:
          "「とほほのWWW入門」サイト管理者。1988年大学卒業後IT関連会社に入社。1996年から個人活動としてWebに関わる技術情報の発信サイト「とほほのWWW入門」を運営してきました。HTML/JavaScript/CSS、各種プログラミング言語、フレームワークなどの入門情報を発信しています。最近はWeb技術もネタが尽きてきて陶磁器、洋楽、中国語、韓国語、タイ料理など様々な「○○入門」の発信に手を出しつつあります。",
      },
    ],
    jobboards,
    sponsors: [
      {
        key: "perl",
        class: "basis-full",
        icon_class: "max-w-[300px]",
        label: "Perl Sponsors",
        companies: [
          {
            name: "株式会社ディー・エヌ・エー",
            image: "dena.png",
            url: "https://dena.com",
          },
          {
            name: "株式会社はてな",
            image: "hatena.png",
            url: "https://hatenacorp.jp/",
          },
          {
            name: "株式会社Helpfeel",
            image: "helpfeel.png",
            url: "https://corp.helpfeel.com/ja/home",
          },
          {
            name: "合同会社もりたつ技商",
            image: "moritaz.png",
            url: "https://corp.moritaz.com/",
          },
        ],
      },
      {
        key: "gold",
        label: "Gold Sponsors",
        class: "basis-full",
        icon_class: "max-w-[200px]",
        companies: [
          {
            name: "株式会社モバイルファクトリー",
            image: "mobile-factory.png",
            url: "https://www.mobilefactory.jp/",
          },
          {
            name: "株式会社フリークアウト",
            image: "freakout.png",
            url: "https://www.fout.co.jp/freakout/",
          },
          {
            name: "さくらインターネット株式会社",
            image: "sakura.png",
            url: "https://www.sakura.ad.jp/",
          },
          {
            name: "株式会社PR TIMES",
            image: "prtimes.png",
            url: "https://developers.prtimes.jp/",
          },
          {
            name: "株式会社カヤック",
            image: "kayac.png",
            url: "https://www.kayac.com/company/infographics",
          },
          {
            name: "コインチェック株式会社",
            image: "coincheck.png",
            url: "https://corporate.coincheck.com/",
          },
          {
            name: "合同会社Y.pm",
            image: "ypm.png",
            url: "https://www.ypm.llc/",
          },
          {
            name: "株式会社マネーフォワード",
            image: "moneyforward.png",
            url: "https://corp.moneyforward.com/",
          },
        ],
      },
      {
        key: "silver",
        label: "Silver Sponsors",
        class: "basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "こだまリサーチ株式会社",
            image: "kodama.png",
            url: "https://www.kodamari.com/",
          },
          {
            name: "株式会社Diverse",
            image: "diverse.png",
            url: "https://diverse-inc.co.jp/",
          },
          {
            name: "株式会社ネコトーストラボ",
            image: "neko-toast-lab.png",
            url: "https://nekotoast-lab.com/",
          },
          {
            name: "株式会社コルシス",
            image: "colsis.png",
            url: "https://colsis.jp/",
          },
          {
            name: "合同会社HaveFunTech",
            image: "havefuntech.png",
            url: "https://have-fun.tech/",
          },
          {
            name: "シックス・アパート株式会社",
            image: "six-apart.png",
            url: "https://www.sixapart.jp/",
          },
          {
            name: "株式会社Cubicroot",
            image: "cubicroot.png",
            url: "https://libsisimai.org/",
          },
          {
            name: "hachioji.pm",
            image: "hachioji.png",
            url: "https://twitter.com/hachiojipm",
          },
          {
            name: "Ossan.fm",
            image: "ossanfm.png",
            url: "https://ossan.fm",
          },
        ],
      },
      {
        key: "lt-battle",
        label: "LTバトル",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社ネコトーストラボ",
            image: "neko-toast-lab.png",
            url: "https://nekotoast-lab.com/",
          },
        ],
      },
      {
        key: "naming-rights",
        label: "ネーミングライツ",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社Helpfeel",
            image: "helpfeel.png",
            url: "https://corp.helpfeel.com/ja/home",
          },
        ],
      },
      {
        key: "recording",
        label: "公開収録",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社Helpfeel",
            image: "helpfeel.png",
            url: "https://corp.helpfeel.com/ja/home",
          },
        ],
      },
      {
        key: "signboard",
        label: "案内看板",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社Helpfeel",
            image: "helpfeel.png",
            url: "https://corp.helpfeel.com/ja/home",
          },
        ],
      },
      {
        key: "t-shirt",
        label: "Tシャツ",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "hachioji.pm",
            image: "hachioji.png",
            url: "https://twitter.com/hachiojipm",
          },
        ],
      },
      {
        key: "tote-bag",
        label: "トートバック",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社はてな",
            image: "hatena.png",
            url: "https://hatenacorp.jp/",
          },
        ],
      },
      {
        key: "name-tag",
        label: "名札",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "Ossan.fm",
            image: "ossanfm.png",
            url: "https://ossan.fm",
          },
        ],
      },
      {
        key: "student-support",
        label: "学生支援",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社はてな",
            image: "hatena.png",
            url: "https://hatenacorp.jp/",
          },
          {
            name: "合同会社もりたつ技商",
            image: "moritaz.png",
            url: "https://corp.moritaz.com/",
          },
          {
            name: "合同会社Y.pm",
            image: "ypm.png",
            url: "https://www.ypm.llc/",
          },
        ],
      },
      {
        key: "best-talk",
        label: "ベストトーク",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "株式会社コルシス",
            image: "colsis.png",
            url: "https://colsis.jp/",
          },
        ],
      },
      {
        key: "best-lt",
        label: "ベストLT",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "さくらインターネット株式会社",
            image: "sakura.png",
            url: "https://www.sakura.ad.jp/",
          },
        ],
      },
      {
        key: "guest",
        label: "ゲスト",
        class: "md:basis-64 basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "hachioji.pm",
            image: "hachioji.png",
            url: "https://twitter.com/hachiojipm",
          },
        ],
      },
      {
        key: "special-thanks",
        label: "スペシャルサンクス",
        class: "basis-full",
        icon_class: "max-w-[150px]",
        companies: [
          {
            name: "30days Album",
            image: "30days_album.png",
            url: "https://30d.jp/",
          },
          {
            name: "株式会社ヌーラボ",
            image: "nulab.png",
            url: "https://nulab.com/",
          },
          {
            name: "株式会社はてな",
            image: "hatena.png",
            url: "https://hatenacorp.jp/",
          },
        ],
      },
    ],
    staff,
    individualSponsors,
  },
};
