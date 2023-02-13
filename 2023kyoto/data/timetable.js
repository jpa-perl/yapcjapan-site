const {trackA, trackB, trackC} = require('./tracks');

const start = new Date('2023/3/19 9:30');
const end = new Date('2023/3/19 19:30');

const tracks = [
  {
    name: 'Track A',
    talks: trackA,
  },
  {
    name: 'Track B',
    talks: trackB,
  },
  {
    name: 'Track C',
    talks: trackC,
  }
];

let currentTime = start;
const row = [];
const currentDurations = [...tracks.map(() => 0)];

while(currentTime.getTime() < end.getTime()) {
  const td = [];
  for(let i = 0; i < tracks.length; i++) {
    const currentDuration = currentDurations[i];
    if(currentDuration >= 5) {
      currentDurations[i] -= 5;
    } else {
      const talk = tracks[i].talks.shift();
      if(talk) {
        currentDurations[i] = talk.duration - 5;
        const rowspan = Math.ceil(talk.duration / 5);
        td.push({ rowspan, ...talk });
      }
    }
  }
  const hour = currentTime.getHours();
  const _min = currentTime.getMinutes();
  const minute = _min < 10 ? `0${_min}` : _min;
  const time = `${hour}:${minute}`;
  row.push({ time, td });
  currentTime.setMinutes(currentTime.getMinutes() + 5);
}

const table = {
  head: ['時刻', ...tracks.map((track) => track.name)],
  row,
};

module.exports = {
  table,
  talks: [
    {
      talk_id: 1,
      title: 'ゲスト対談',
      description: 'TBD',
      duration: 50,
      authors: [
        {
          author: '石田絢一 uzulla / Junichi Ishida',
          author_icon: './images/speaker/uzulla.jpg',
          github_url: 'https://github.com/uzulla',
          twitter_url: 'https://twitter.com/uzulla',
          blog_url: 'https://uzulla.hateblo.jp/',
        },
        {
          author: '和田裕介 Yusuke Wada',
          author_icon: './images/speaker/yusukebe.jpg',
          github_url: 'https://github.com/yusukebe',
          twitter_url: 'https://twitter.com/yusukebe',
          blog_url: 'https://yusukebe.com/',
        },
      ],
    },
    {
      talk_id: 2,
      title: 'Keynote',
      description: 'TBD',
      duration: 40,
      authors: [
        {
          author: '松木 雅幸 songmu / Matsuki Masayuki',
          author_icon: './images/speaker/songmu.jpg',
          github_url: 'https://github.com/songmu',
          twitter_url: 'https://twitter.com/songmu',
          blog_url: 'https://songmu.jp/riji/',
        },
      ],
    },
    {
      talk_id: 3,
      title: 'Lightning Talks',
      description:
        '\
1. スポンサーLT（ピザハット様）\n\
2. さっぴー川原 「MyDNSとUnboundが同居していることにハマった」\n\
3. Kang-min Liu「aaa.pl」\n\
4. nikkie 「Perlの力も使って聴かせるAIの声」\n\
5. ariaki 「CTOになりたいと思っていたけど今はそのときではないと気づいた件」\n\
6. utgwkk 「prototypeとjust epic. と私」\n\
7. タケタニヒロト「Perl詩を味わう」\n\
8. kfly8 「Tシャツに書かれたコードを読む」\n\
',
      duration: 40,
      authors: [],
    },

    {
      talk_id: 11,
      title: 'PHP で NFC リーダーを実装する',
      description:
        '\
Suica や PASMO をデバイスにタッチして値を取得する、そんな夢を PHP で叶えました。\n\
PHP7.4 から PHP FFI と呼ばれるものが導入されました。Suica や PASMO は FeliCa と呼ばれる NFC の規格の 1 つです。実装方法は多岐に渡りますが、概ね libnfc と呼ばれるライブラリや libusb を使う方法などがあります。しかし、今までの PHP ではこのライブラリを呼び出すことさえ叶いませんでした。そこで、本セッションでは PHP7.4 から導入された PHP FFI を用いてどのように PHP で NFC リーダーを実装するのか、そして実際のデモを交えてトークできればと思います。\n\
\n\
Perl にも FFI があるようですので、このトークをみてご興味を持った方はぜひお試しいただければと思います。',
      duration: 20,
      authors: [
        {
          author: 'めもりー',
          author_icon: './images/speaker/m3m0r7.jpeg',
          github_url: 'https://github.com/m3m0r7',
          twitter_url: 'https://twitter.com/m3m0r7',
          blog_url: '',
        },
      ],
    },
    {
      talk_id: 12,
      title:
        'フロー効率の向上から始める開発生産性の高め方 ~ モブワークを沿えて ~',
      description:
        '\
『LeanとDevOpsの科学』という書籍では、ハイパフォーマーである組織の特徴として「デプロイの頻度が多いこと」を挙げています。しかしデプロイの頻度を多くするには具体的にどうすればいいのでしょうか？この疑問に対し、モブワークと呼ばれる開発手法を通して解決を試みた結果をお話します。試行錯誤を重ねる中でチームが文字通り一心同体となり、リソース効率からフロー効率へ発想を転換していく過程をお楽しみいただけます。ハイパフォーマーを目指したい方、良いチームを育てたい方、開発で充実感を味わいたい方におすすめです。',
      duration: 20,
      authors: [
        {
          author: '面川泰明',
          author_icon: './images/speaker/omokawa_yasu.jpg',
          github_url: 'https://github.com/YasuakiOmokawa',
          twitter_url: 'https://twitter.com/omokawa_yasu',
          blog_url: 'https://note.com/omokawa_yasuaki',
        },
      ],
    },
    {
      talk_id: 13,
      title: 'Hono[炎] Ultrafast web framework for Cloudflare Workers.',
      description:
        '\
Talk about Hono - ultrafast web framework that I making, and about the wonder of Cloudflare Workers. <https://github.com/yusukebe/hono>',
      duration: 20,
      authors: [
        {
          author: 'Yusuke Wada',
          author_icon: './images/speaker/yusukebe.jpg',
          github_url: 'https://github.com/yusukebe',
          twitter_url: 'https://twitter.com/yusukebe',
          blog_url: 'https://yusukebe.com/',
        },
      ],
    },
    {
      talk_id: 14,
      title: 'あなたの知らない(かもしれない)コアモジュール ',
      description:
        '\
Perlのバイナリに同梱して配布されるモジュールはコアモジュールと呼ばれます。 もちろんこの中にはEncodeモジュールのような無くてはならない有名なモジュールもありますが、中には「知られてないけど実は便利っぽい」モジュールや「どうしてコアモジュールになっているのかよくわからない」モジュールもあります。 このトークではそのような、あまり知名度が高くなさそうなコアモジュールについて探求した結果を時間の限りご紹介します。 ',
      duration: 20,
      authors: [
        {
          author: '白方健太郎 ',
          author_icon: './images/speaker/argrath.jpg',
          github_url: 'https://github.com/argrath',
          twitter_url: 'https://twitter.com/argrath',
          blog_url: 'https://argrath.ub32.org/annex/',
        },
      ],
    },
    {
      talk_id: 15,
      title: 'my$talk=qr{\b((?:ir)?reg(?:ular )?exp(?:ressions?)?)\b}i;',
      description:
        '\
正規表現。Perlが最も愛されそして(不当にも)憎まれる理由の一つ。しかし今や正規表現をサブ言語として持つ言語はPerlに限りません。本talkではこの最も人気のある言語内言語に関して、時間が許す限り型って、もとい語っていきます。\n\
\n\
* regexp? what is it?\n\
* $supported_by ~~ @most_major_languages;\n\
  * but how (much)??\n\
    * Unicode support?\n\
    * assertions?\n\
    * modifiers?\n\
* use CPAN;\n\
  * Regexp::Assemble;\n\
  * Regexp::Common;\n\
* Irregular expressions\n\
  * qr{(func?(?:tion)((((?:(?>[^()]+)|(?2))*))))}\n\
* (ir)?regular questions (?:from|by) the audience\n\
* ReDOS - Regexp considered harmful!?',
      duration: 20,
      authors: [
        {
          author: 'Dan Kogai',
          author_icon: './images/speaker/dankogai.jpg',
          github_url: 'https://github.com/dankogai',
          twitter_url: 'https://twitter.com/dankogai',
          blog_url: 'https://dankogai.livedoor.blog/',
        },
      ],
    },
    {
      talk_id: 16,
      title: 'Acme、其はPerlのユグドラシル',
      description:
        '\
※タイトルはtreeです\n\
\n\
CPANにリリースされる全てのAcmeモジュール（名前空間にAcmeを含むモジュール）を紹介するPerlの同人活動は、2021年度版『Acme大全』の発酵を以て、14年間の活動に笑止符を打ちました（終止符とは言ってない）。\n\
\n\
拙作の奇怪ですので、これまでどのように活動に取り組んできたのか、\n\
今まで出会った中で特に印象腐海モジュールは何だったのか、\n\
Acme界隈の出来事や動向、そして「これから」について大いに騙りたいと思います。\n\
\n\
アジェンダ\n\
- Acmeの扉\n\
- 必要はAcmeの母\n\
- 少々Acmeウゼェナ\n\
- 星のAcme',
      duration: 40,
      authors: [
        {
          author: 'makamaka',
          author_icon: './images/speaker/maka2_donzoko.png',
          github_url: 'https://github.com/makamaka',
          twitter_url: 'https://twitter.com/maka2_donzoko',
          blog_url: 'http://www.donzoko.net/gakuya/',
        },
      ],
    },
    {
      talk_id: 17,
      title:
        '5年にわたる "Perl の" REST API を "Perl で" GraphQL API 化し作り直す',
      description:
        '\
はてなマンガチームで開発している GigaViewer においては，\
REST API をサーバーサイドエンジニアがネイティブアプリの1画面ごとに毎回作り，画面の要素変更のたびにひたすらパラメーターを追加して提供していました．\n\
\n\
これを GraphQL API として作り直したことで，\
既存実装の再利用性も高まり，追加・変更時の開発効率も高くなり，\
決められたスキーマから自由に必要な要素を組み合わせることができるようになりクライアントサイドからも扱いやすくなりました．\n\
\n\
この発表では，5年にわたる Perl による既存のコードベースがあるうえで，いかにして，ライブラリと結合し 不足する機能を追加して\
パフォーマンス向上・GraphQL ベストプラクティスを導入できるようしたかや，どのようにチーム間で連携しながらスキーマファーストで開発を行い\
既存・新規アプリに導入していける柔軟な GraphQL API を実現したかについて話します．\n\
\n\
## アジェンダ\n\
\n\
- REST API 時代における苦労の紹介\n\
  - 1画面1API から生まれる不必要な情報\n\
  - よく似たリソースの増加\n\
  - 再利用のしづらさ\n\
- 既存の設計をふまえた導入\n\
  - GraphQL ライブラリの導入\n\
  - キャッシュとパフォーマンス改善のための仕組み\n\
- GraphQL デファクトスタンダードに揃える\n\
  - GraphQL ベストプラクティスを実現する拡張\n\
  - エラーハンドリングとスキーマファースト開発のための仕組み\n\
- ネイティブアプリ開発チーム・ウェブ開発チームを横断した連携と意思決定\n\
  - GraphQL 導入のための実験\n\
  - スキーマの決定と整合性を取るための会\n\
- どう良くなったか\n\
  - プロトタイプづくりが簡単に\n\
  - ウェブでも使えるようになった\n\
  - 機能の追加変更が簡単に\n\
\n\
## ゴール\n\
\n\
- Perl による GraphQL 開発のための知見と手段について知る\n\
- プロダクトの特性に応じライブラリを拡張することで開発効率を上げる\n\
- チームを横断した枠組みで共同開発プロジェクトを意思決定して進める\n\
\n\
## 対象者\n\
\n\
- Perl による GraphQL 開発に興味のある開発者\n\
- 既存のコードを活かしてより柔軟な API を提供したい開発者\n\
- 既に GraphQL 開発を行っていて他社事例が気になる開発者\n\
- チームを横断したプロジェクトを行う開発者',
      duration: 40,
      authors: [
        {
          author: 'mangano-ito',
          author_icon: './images/speaker/mangano_ito.jpg',
          github_url: 'https://github.com/mangano-ito',
          twitter_url: 'https://twitter.com/mangano_ito',
          blog_url: 'https://mangano-ito.hatenablog.com/',
        },
      ],
    },
    {
      talk_id: 18,
      title:
        'じわじわとPerlからGoに移行しようとしている俺達のマイクロサービシーズの紹介',
      description:
        '\
みなさんはサービスを運営していて、技術的な要因、もしくは採用的な要因でPerlでこれから将来やっていくことに行き詰まってしまうことはありませんか。\n\
ありますよね、そうあるんですよ！\n\
\n\
というわけで面白法人カヤックが運営するトーナメントTonamelは様々な理由により、じわっじわっとPerlを主軸としたモノリスアプリケーションから、Goを主体としたマイクロサービス群へ機能を移設している真っ最中でございます。\n\
\n\
このトークでは、2020年から始めた移行の歩みを道半ばですが紹介します。\n\
\n\
* 移行に際してどのように現状と技術的もしくは開発リソース的に折り合いをつけていくか\n\
* どうやって2つの言語を共存させるか\n\
* 認証をどうするか\n\
  * まだPerlから剥がせてないので、PerlアプリケーションがAPI Gatewayの役割を持っている話\n\
\n\
などなど、そのへんのよもやまを話します。',
      duration: 40,
      authors: [
        {
          author: 'macopy',
          author_icon: './images/speaker/mackee_w.jpg',
          github_url: 'https://github.com/mackee',
          twitter_url: 'https://twitter.com/mackee_w',
          blog_url: 'https://mackee.hatenablog.com/',
        },
      ],
    },
    {
      talk_id: 19,
      title: 'TypeScript へ型安全性を高めながらリプレースする',
      description:
        '\
Perl や JavaScript 等の動的型付け言語では柔軟性が高い利点もありますが、複雑化してきて思うように開発速度が出なかったり、メンテナンスが大変だったりと言ったつらさを感じてはいませんか？\n\
本セッションでは動的型付け言語に静的型をつける「漸進的型付け」に触れながら、JavaScript を緩い型付けの TypeScritpt へ、そしてより堅い TypeScript へと移行する方法について、実際のリプレース事例を交えて紹介します。\n\
\n\
トピック\n\
- 動的型付け言語つらい\n\
  - Perl と JavaScript の実例\n\
- 漸進的型付けってなに \n\
- がんばらない TypeScript: 緩いオプションなら簡単に移行できる\n\
- メリハリのある TypeScript: 堅いオプションで部分的に無効にしながら移行する\n\
- リプレース手順\n\
- リプレースの結果\n\
\n\
想定ターゲット\n\
- 運用歴の長くフロントエンドの環境がレガシーなプロダクトで開発をしている人\n\
  - JavaScript を使ってる or TypeScript に置き換え済みだが緩いオプションで思うように恩恵を受けられていない\n\
- 動的型付け言語ユーザー',
      duration: 20,
      authors: [
        {
          author: 'kimuson',
          author_icon: './images/speaker/kimuson.jpg',
          github_url: 'https://github.com/d-kimuson',
          twitter_url: 'https://twitter.com/_kimuson',
          blog_url: 'https://kimuson.dev/',
        },
      ],
    },
    {
      talk_id: 20,
      title: 'スクラムでつくる頼もしく生き生きとしたチーム',
      description:
        '\
はてなブックマークのWebチームでは、開発プロセスにスクラムを採用しています。なかなかスクラムを乗りこなせない時期が続いていましたが、2021年10月に大きな転期があり、チームが劇的な進化を遂げました。今では、2週間スプリントのゴールを適切に設定し、その達成の道のりを楽しむことができています。スプリントのゴールを達成するために、タスクの分解や日々のコミュニケーションも活発になり、安定したパフォーマンスを発揮できるようになっています。その安定したパフォーマンスを背景に、少し遠い未来の予定についても、根拠を持って答えられるようになりました。この発表では、スクラムチームを大きく進化させた方法や、実体験を通じて学んだスクラムのパワーをお伝えします。この発表を聞いたあなたは、きっと自分のチームでもスクラムを実践してみたくなることでしょう！',
      duration: 20,
      authors: [
        {
          author: '五十嵐雄',
          author_icon: './images/speaker/yigarashi_9.jpg',
          github_url: 'https://github.com/yigarashi-9',
          twitter_url: 'https://twitter.com/yigarashi_9',
          blog_url: 'https://yigarashi.hatenablog.com/',
        },
      ],
    },
    {
      talk_id: 21,
      title:
        '7年間運用したソーシャルゲームをAmazon EC2構成からAmazon ECS構成へと乗り換えた話',
      description:
        '\
弊社KAYACで運用しているソーシャルゲームタイトル「ぼくらの甲子園！ポケット」は、2014年のリリースから、7周年を迎えました。開発チームでは、Amazon Linux OSのサポート終了に対応することをきっかけに、Amazon EC2構成からAmazon ECS構成への乗り換えをするという決断をしました。\n\
- 従来のEC2によるシステム構成からコンテナベースのシステム構成へと乗り換えることで大きく変わった点\n\
- リリース時からアップデートされず維持されていた、Perlのバージョンを5.16から5.30へとアップデートした際の苦労\n\
- 長い歴史で肥大化してしまったリポジトリ特有の問題とその対処、どうしてもSPOFとなってしまっていたバッチサーバを冗長化する作戦\n\
- システム構成の刷新といったような、専門的で、非エンジニアにはその恩恵が実感されづらい仕事を理解してもらい協力を得ることの重要性\n\
…など、一連のシステム刷新作業を通して様々な学びが得られたので、それらについてお話させていただきたいと思います。',
      duration: 40,
      authors: [
        {
          author: 'commojun',
          author_icon: './images/speaker/commojun.jpg',
          github_url: 'https://github.com/commojun',
          twitter_url: 'https://twitter.com/commojun',
          blog_url: '',
        },
      ],
    },
    {
      talk_id: 22,
      title: 'ReDoS 検出の最先端 recheck の紹介',
      description:
        '\
Perl をはじめ多くのプログラミング言語の正規表現のマッチングではバックトラッキングが使われていますが，正規表現パターンによってはバックトラッキングが爆発し，マッチングに多大な時間を消費することがあります．これを利用した DoS 攻撃の一種が ReDoS と呼ばれます．\n\
発表者は recheck という ReDoS 検出プログラム (https://github.com/MakeNowJust-Labo/recheck) を開発・公開しています．これは最先端の ReDoS 検出アルゴリズムを実装していて，高速かつ正確な検出が可能となっています．\n\
発表では，ReDoS という脆弱性がどのようなものか，どのようにして ReDoS を検出するのか，ReDoS を防ぐためにはどうすればよいのか，といった点について解説します．',
      duration: 20,
      authors: [
        {
          author: '藤浪大弥 (@MakeNowJust)',
          author_icon: './images/speaker/make_now_just.png',
          github_url: 'https://github.com/MakeNowJust',
          twitter_url: 'https://twitter.com/make_now_just',
          blog_url: 'https://makenowjust-labo.github.io/blog/',
        },
      ],
    },
    {
      talk_id: 23,
      title: 'perlimportsから探るPPIの世界',
      description:
        '\
TPC 2021 in the Cloudで発表されたperlimportsは、Perlの関数エクスポートを機械的に整理してくれる画期的なツールでした。Perlで書かれたperlimportsは、関数エクスポート対象の関数名の解決にPPIと呼ばれる静的解析ツールを利用しています。\n\
本トークではperlimportsの紹介を通して、PPIを利用したPerlの静的解析の世界を覗いてみます。\n\
',
      duration: 20,
      authors: [
        {
          author: '八雲アナグラ',
          author_icon: './images/speaker/AnaTofuZ.jpg',
          github_url: 'https://github.com/AnaTofuZ',
          twitter_url: 'https://twitter.com/AnaTofuZ',
          blog_url: 'https://anatofuz.hatenablog.com/',
        },
      ],
    },
    {
      talk_id: 24,
      title: 'エンジニアの個人ブランディングと技術組織',
      description:
        '\
僕らはインターネット上で開発の知見を得ることによってサービスを開発・運営できているので、インターネットに還元したい。そんな気持ちから、会社でもアウトプット (登壇や技術ブログ、執筆、OSS 活動等) が推奨されています。\n\
社としての技術ブログも存在しますが、スタッフ個人のブログを通じて発信するのも同じように推奨していきたい。エンジニアの個人ブランディングも大事だと考えているし、自分の場所の方が書きやすいというのも感じているからです。\n\
その上で、社内外の色んなサービスに散らばった技術 Tips を上手くまとめて再放流することで、手軽に情報を摂取し、技術的好奇心を満たし、成長し続けられる環境を用意したい。\n\
そんな、個人の集合体としての技術コミュニティを運営する方法と、そのために開発したアプリケーションについて紹介します。',
      duration: 20,
      authors: [
        {
          author: 'Takafumi ONAKA',
          author_icon: './images/speaker/onk.jpg',
          github_url: 'https://github.com/onk',
          twitter_url: 'https://twitter.com/onk',
          blog_url: 'https://onk.hatenablog.jp/',
        },
      ],
    },
  ],
};
