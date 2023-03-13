const {trackA, trackB, trackC} = require('./tracks');

const start = new Date('2023/3/19 9:30');
const end = new Date('2023/3/19 19:30');

const tracks = [
  {
    name: 'Scrapboxホール by Helpfeel',
    track: 'A',
    talks: trackA,
  },
  {
    name: 'Gyazoホール by Helpfeel',
    track: 'B',
    talks: trackB,
  },
  {
    name: 'G会議室',
    track: 'C',
    talks: trackC,
  }
];

let currentTime = start;
const row = [];
const currentDurations = [...tracks.map(() => 0)];

// 5分ごとのtrを作る
while(currentTime.getTime() < end.getTime()) {
  // track分のtrを作る
  const td = [];
  const hour = currentTime.getHours();
  const _min = currentTime.getMinutes();
  const minute = _min < 10 ? `0${_min}` : _min;
  const time = `${hour}:${minute}`;
  for(let i = 0; i < tracks.length; i++) {
    const currentDuration = currentDurations[i];
    if(currentDuration >= 5) {
      currentDurations[i] -= 5;
    } else {
      const talk = tracks[i].talks.shift();
      if(talk) {
        currentDurations[i] = talk.duration - 5;
        // 発表時間からrowspanを割り出す
        const rowspan = Math.ceil(talk.duration / 5);
        const classes = [tracks[i].track];
        if(talk.title.includes('LT')) classes.push('lt');
        if(talk.title.includes('休憩')) classes.push('rest');
        if(talk.title.includes('質疑応答')) classes.push('qa');
        td.push({ rowspan, class: classes.join(' '), start: time, ...talk });
      }
    }
  }
  row.push({ time, td });
  currentTime.setMinutes(currentTime.getMinutes() + 5);
}

const table = {
  head: [...tracks.map((track) => track.name)],
  row,
};

module.exports = {
  table,
  talks: [
    {
      talk_id: 1,
      title: 'キーノート',
      description: '株式会社はてな 取締役 組織・基盤開発本部長。2001年に創業メンバーの1人として有限会社はてな（当時）にエンジニアとして入社。その後「はてなブログ」の立ち上げや事業化を指揮。はてなのサービス・システムの開発本部長を経て、2022年5月より現職。組織開発及びシステム基盤開発を統括する本部長と人事部長を兼任し、経験を活かした多角的な組織開発に取り組む。代表作は Devel::KYTProf',
      duration: 40,
      authors: [
        {
          author: '大西 康裕 / Yasuhiro Onishi',
          author_icon: './images/onishi.jpg',
        }
      ],
    },
    {
      talk_id: 2,
      title: 'ゲストトーク',
      description: '株式会社ディー・エヌ・エー 常務執行役員。法学部法律学科からエンジニアへ転身し、2011年にDeNAに入社。Mobageおよび協業プラットフォームの大規模システム開発、オートモーティブ事業本部の開発責任者を歴任。2018年より執行役員としてDeNAのエンジニアリングの統括を務め、2019年より常務執行役員 CTOとしてより経営レベルでの意思決定にかかわることと、技術・モノづくりの強化を担う。2020年より常務執行役員として技術領域を担当しつつ、メディカル領域の新規事業を担当。',
      duration: 40,
      authors: [
        {
          author: '小林 篤 / Atsushi Kobayashi',
          author_icon: './images/nekokak.jpg',
        }
      ],
    },
    {
      talk_id: 3,
      title: '法と技術の交差点',
      description: '本セッションでは立命館大学情報理工学部情報理工学科教授の上原哲太郎先生と、同じく立命館大学法学部法学科教授の宮脇正晴先生を招聘して、AIと著作権、個人情報やThird Party Cookieの扱い、OSSライセンス、忘れられる権利やcoinhive事件のような法律と技術が絡み合うトピックスなどを取り上げて対談形式でお送りします（ここに書かれているトピックは仮のもので当日までに取り上げる内容は変更されることがあります）。',
      duration: 50,
      authors: [
        {
          author: '上原 哲太郎 / Tetsutaro Uehara',
          author_icon: './images/uehara.jpg',
        },
        {
          author: '宮脇 正晴 / Miyawaki Masaharu',
          author_icon: './images/miyawaki.jpg',
        }
      ],
    },
    {
      talk_id: 4,
      title: 'ソフトウェアエンジニアリングサバイバルガイド: 廃墟を直す、廃墟を出る、廃墟を壊す、あるいは廃墟に暮らす、廃墟に死す',
      description: 'ソフトウェアの開発と運用にはライフサイクルが存在します。いわゆる「一般的な (ウェブ) アプリケーション」は書いて終わりではなく、サービスが続く限りは既存の機能を提供しながら新機能開発であったり不具合修正であったりを続ける必要があり、ソフトウェアは徐々にその形を変化させていくことはもはや周知の事実であると思います。\nつまりソフトウェアについても現実に存在する「モノ」のように定期的あるいは継続的なメンテナンスが必要なのですが、様々な理由からそういった治安維持が放棄されいわゆる「廃墟」と化してしまうサービスやコンポーネントが出てくるというのは現実として発生します。そしてえてしてそのようなコードこそ、理由はわからないものの動き続け、不思議と金を稼いでいるということも良くある話です。「金を埋む廃墟」は現実世界では最高の不動産かもしれませんが、ことソフトウェアでは通常そうも参りません。変化のスピードが早いためです。\n本セッションではそういったソフトウェア的廃墟ができる背景やその成り立ち、そして実際に廃墟をなんとか解決していく方法、廃墟を生みださない心意気、そしてにっちもさっちも行かない場合のための「廃墟で頑張って、できるだけ快適に暮らす」という生活の知恵を共有できればと考えています。',
      duration: 40,
      authors: [
        {
          author: '川上 大喜 / Taiki Kawakami / @moznion',
          author_icon: './images/moznion.jpg',
        }
      ],
    },
    {
      talk_id: 5,
      title: '企画',
      description: 'TBD',
      duration: 45,
      authors: [
      ],
    },
    {
      talk_id: 101,
      title: '"普通"のWebアプリでWASMを活用する',
      description: "WebAssembly(WASM)は近年Web以外にも活用の幅を広げており、Perlエコシステムにおいても、Perl処理系をWasmに変換してWeb上で動作させるWebPerlや、PerlからWasmを呼び出すためのCPANモジュールが登場しています。\n\n一方、実プロダクトでの活用シーンの情報はまだまだ少なく、WASM適用がどのようなシチュエーションで有効なのか、イメージが湧きづらい状態です。\n\n\n\nこのトークでは、株式会社Helpfeelにおける独自記法パーサのWasm実装を例に、\"普通\"のWebアプリケーションへのWasm適用にトライする中での、適用先の検討、トレードオフ、具体的な活用例などをご紹介します。",
      duration: 40,
      authors: [
        {
          author: 'niboshi',
          author_icon: './images/speaker/mpppk.jpg',
          github_url: "https://github.com/mpppk",
          twitter_url: "https://twitter.com/mpppk",
          blog_url: "https://nibo.sh/",
        }
      ],
    },
    {
      talk_id: 102,
      title: '2023年春のPerl',
      description: "久しぶりのシリーズ再開ということで、今回はPerl 5.32からそろそろ概要が見えてきている Perl 5.38 までの情報を簡単にまとめていきます。",
      duration: 40,
      authors: [
        {
          author: 'charsbar',
          author_icon: './images/speaker/charsbar.jpeg',
          github_url: "",
          twitter_url: "",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 103,
      title: '4PB(ペタバイト)を超えるオブジェクトストレージをハードウェアからアプリケーションにかけて運用するノウハウ',
      description: "GMOペパボでは、分散オブジェクトストレージを実現できるPerl製のソフトウェアであるMogileFSと、300本以上の大容量のHDDを搭載したオンプレミスなサーバ群を組み合わせて、大規模なオブジェクトストレージを実現しています。\n\nこれを活用して、写真共有サービスの30days Albumの写真・動画をホストしたり、さらにS3互換のREST APIを開発してS3ライクに利用できるプライベートオブジェクトストレージとしても利用できるよう拡張してきました。\n\n運用を始めた2008年時点で1TB程度だったオブジェクトストレージは、2023年1月現在では4PBを超えており4000倍以上の規模まで成長しました。\n\n\n\n本トークでは、十数年かけて4PBまで成長したオブジェクトストレージをどのように運用してきたのかハードウェアからアプリケーションにかけて横断して紹介します。\n\n\n\nアジェンダ\n\n - MogileFSを利用したオブジェクトストレージのアーキテクチャ\n\n - キャパシティを意識したストレージのライフサイクル管理\n\n - サービスの特性を考慮したREST APIの実装\n\n - S3互換のプライベートオブジェクトストレージのS3移設",
      duration: 40,
      authors: [
        {
          author: '三上　烈史（みかみ　つよし）',
          author_icon: './images/speaker/rsym.jpg',
          github_url: "https://github.com/rsym",
          twitter_url: "https://twitter.com/rsym1290",
          blog_url: "https://rsym1290.hatenablog.jp/",
        }
      ],
    },
    {
      talk_id: 104,
      title: 'DNS権威サービスへのDDoSとハイパフォーマンスなベンチマーカ',
      description: "クラウドファースト、クラウドバイデフォルトなどと言われるようにクラウドサービス前提にシステムの構築運用がなっています。インターネットにおける重要な基盤技術のひとつであるDNSにおいてもクラウドサービスが使われるようになっています。\n\n\n\n本トークでは、さくらのクラウドのDNSアプライアンスサービスに行われたDNS水責め攻撃と呼ばれるDDoS攻撃の内容およびその対策について紹介します。また、対策にあたって作成したDNSサーバへ負荷をかけるベンチマーカを題材にハイパフォーマンスなベンチマーカを作る上で必要な要素も紹介します。\n\n\n\nアジェンダ\n\n- さくらのクラウド DNSアプライアンスとは(Perlも使っているよ)\n\n- DNS水責め攻撃とその実際\n\n- GoによるハイパフォーマンスなDNSのベンチマーカ作成\n\n- さくらインターネット SRE室の取り組み\n\n",
      duration: 20,
      authors: [
        {
          author: '長野雅広',
          author_icon: './images/speaker/kazeburo.jpg',
          github_url: "https://github.com/kazeburo",
          twitter_url: "https://twitter.com/kazeburo",
          blog_url: "https://kazeburo.hatenablog.com/",
        }
      ],
    },
    {
      talk_id: 105,
      title: 'honoの3+1のルーターと、そこにつながるPRがプロジェクトにもたらしたもの',
      description: "超軽量のウェブフレームワークであるhonoにおいて、高速な動作を中心で支えているのがルーターです。\n\nhonoは現在、内部では3つのルーターの実装を持っていますが、構築したアプリケーションのルーティングに応じてそこから自動で選択されて、実行時には最適な1つが利用されるようになっています。\n\n\n\n発表の前半では3つのルーターの紹介と、そこから1つが選択される仕組みについてお話します。\n\n\n\n後半では、ルーターの実装が追加されていった経緯と、そこにつながるPRがOSSとしてのhonoになにをもたらしたかについて、PR作成者側の視点で感じたことをお話します。",
      duration: 20,
      authors: [
        {
          author: '天野 卓',
          author_icon: './images/speaker/usualoma.jpg',
          github_url: "https://github.com/usualoma",
          twitter_url: "https://twitter.com/usualoma",
          blog_url: "https://blog.taaas.jp/",
        }
      ],
    },
    {
      talk_id: 106,
      title: 'JavaScriptのASTと戯れる',
      description: "Perl Mongerの皆さんもウェブアプリケーション開発を行う上で切っても切り離せないものの1つがJavaScriptかと思います。皆さんも聞き馴染みがあるであろうESLintやBabelやWebpack、esbuildやPrettierやTypeScriptなどなどあらゆるJavaScript関連のツールは内部的にJavaScriptのASTを操作し、それらを組み合わせることで成果物を生成しています。\n\n\n\nこのトークではJavaScript(ECMAScript)を扱う上でのASTの概要について紹介した後に、実際にハンズオン形式でASTを利用したJavaScriptのソースコードの変換や生成の片鱗を体験していただけるような構成になる予定です。\n\n\n\n※ ASTとは何かという話であったり、AST自体の詳細に踏み込んだりなどはしない予定であくまで「戯れる」ことがメインの発表になるかと思います",
      duration: 20,
      authors: [
        {
          author: 'Pasta-K',
          author_icon: './images/speaker/pastak.png',
          github_url: "https://github.com/pastak",
          twitter_url: "https://twitter.com/pastak",
          blog_url: "https://blog.pastak.net/",
        }
      ],
    },
    {
      talk_id: 107,
      title: 'llsとcachectlから学ぶ、Goでシステムプログラミングをする方法',
      description: "PerlのCPANモジュールのSys::PageCacheはLinux上のページキャッシュを調整したい時に使われてきました。このようにシステムプログラミングが必要な場面でPerlが使われることがよくありました。\n\nしかし最近はSys::PageCacheの代替として使えるGo製のcubicdaiya/cachectlのようにGoで作られる事例も出てきています。\n\ncubicdaiya/cachectlは元々cgoを使ってシステムコールをC言語経由で実行していましたが、以前私がpure Go実装に書き変えています。\n\nまた大量のファイルが置かれているディレクトリに対しても利用できるlsとして、私が作ったllsもGoからシステムコールのgetdents64を直接呼び出すことで、pure Goで実装しています。\n\nそこで本発表ではGoでシステムプログラミングをする方法について、私が経験したことをベースにお話しします。\n\n参考：\n\nhttps://developers.prtimes.jp/2021/09/15/decommissioning_old_storage_list_a_dir_29million/\n\nhttps://github.com/catatsuy/lls\n\nhttps://github.com/cubicdaiya/cachectl\n\n",
      duration: 20,
      authors: [
        {
          author: 'catatsuy',
          author_icon: './images/speaker/catatsuy.png',
          github_url: "https://github.com/catatsuy",
          twitter_url: "https://twitter.com/catatsuy",
          blog_url: "https://www.catatsuy.org/",
        }
      ],
    },
    {
      talk_id: 108,
      title: 'my new error...',
      description: "try catch に一家言あり最近 https://blog.ojisan.io/my-new-error/ というブログを書きました。この記事ではResult型の導入やエラー監視ツールにデバッグ可能なログを出させる技術について解説をし、自分の考える理想のエラーハンドリングを書きました。しかし職場の7年物の既存実装に正しいエラーハンドリングを持ち込むのは難しかったです。そこで本セッションでは理想のエラーハンドリングプラクティスやそれを支える要素技術について解説し、現場でどうやって段階的にエラーハンドリングや監視体制を改善していけたかという話をします。",
      duration: 20,
      authors: [
        {
          author: '井手優太',
          author_icon: './images/speaker/sadnessOjisan.jpg',
          github_url: "https://github.com/sadnessOjisan",
          twitter_url: "https://twitter.com/sadnessOjisan",
          blog_url: "https://blog.ojisan.io",
        }
      ],
    },
    {
      talk_id: 109,
      title: 'my$talk=qr{\\b((?:ir)?reg(?:ular )?exp(?:ressions?)?)\\b}ig;',
      description: "正規表現。Perlが最も愛されそして(不当にも)憎まれる理由の一つ。しかし今や正規表現をサブ言語として持つ言語はPerlに限りません。本talkではこの最も人気のある言語内言語に関して(再び)時間が許す限り型って、もとい語っていきます。\n\n\n\n* regexp? what is it?\n\n* $supported_by ~~ @most_major_languages;\n\n  * but how (much)?\?\n\n    * Unicode support?\n\n    * assertions?\n\n    * modifiers?\n\n* use CPAN;\n\n  * Regexp::Assemble;\n\n  * Regexp::Common;\n\n* Irregular expressions\n\n  * qr{(func?(?:tion)(\(((?:(?>[^()]+)|(?2))*)\)))}\n\n* (ir)?regular questions (?:from|by) the audience\n\n* ReDOS - Regexp considered harmful!?",
      duration: 20,
      authors: [
        {
          author: 'Dan Kogai',
          author_icon: './images/speaker/dankogai.png',
          github_url: "https://github.com/dankogai",
          twitter_url: "https://twitter.com/dankogai",
          blog_url: "https://dankogai.livedoor.blog",
        }
      ],
    },
    {
      talk_id: 110,
      title: 'ORM - Object-relational mapping',
      description: "タイトルは [Kyoto.pm Tech Talks #01](http://kyotopm.github.io/) リスペクトです。\n\n\n\nはてなの Perl プロダクトは薄いフレームワークを志向して、データベースとのやり取りに DBIx::Sunny や DBIx::Handler::Sunny を用い、主に SQL を書いて暮らしていました。最近、私はこの世界に ORM を持ち込みました。\n\nPofEAA によるデータソースのアーキテクチャの 4 分類、我々が何を考えてどのパターンを選んだか、必要になって書いたプラグイン等、ORM の無い世界に ORM を入れていくに当たって考えたことと、その実践。\n\nPerl Monger なら一生に一度は書くといわれる ORM を書いていく様子を、Rails の ActiveRecord に慣れ親しんだ現代の目線も交えつつお送りします。",
      duration: 40,
      authors: [
        {
          author: 'Takafumi ONAKA',
          author_icon: './images/speaker/onk.png',
          github_url: "https://github.com/onk",
          twitter_url: "https://twitter.com/onk",
          blog_url: "https://onk.hatenablog.jp/",
        }
      ],
    },
    {
      talk_id: 111,
      title: 'Perlと全文検索エンジンGroongaでMySQLのデータを高速に全文検索する',
      description: "MySQLのデータを全文検索したい場合、よくあるアプローチとしては以下の3つが考えられます。\n\n\n\n1. MySQLのデフォルトのストレージエンジンInnoDBの全文検索機能を使う。\n\n2. 別途Elasticsearchを用意し、アプリケーションでMySQLとElasticsearchのデータを更新し、検索はElasticsearchで行う。\n\n3. 別途Elasticsearchを用意し、Logstashを使ってMySQLのデータをElasticsearchに同期する。\n\n\n\n1.は手軽に全文検索を実行できますが、InnoDBの全文検索はあまり速くありません。\n\n2.はMySQL、Elasticsearchのどちらかのデータ更新に失敗した場合のケアなどでアプリケーションが複雑になります。\n\nまた、Elasticsearchが起動していない期間はデータの更新ができなくなります。\n\n3.はデータの削除に対応するのに追加の設定が必要です。また、Logstashはサービスとして起動するのでLogstashの死活監視も必要です。\n\n\n\n上記の通り、よくあるアプローチはそれぞれ課題があります。\n\nそこで、これらの課題を解決すべく、今回MySQLのデータをGroongaに取り込むツールとGroongaに対してHTTP経由でクエリーを発行できるPerl用の\n\nGroongaクライアントモジュールを作成し、これらを組み合わせてMySQLのデータをPerlからGroongaを使って全文検索できる仕組みを作りました。\n\n\n\nこれによって、Groongaを使ってMySQLのデータを高速に全文検索できます。\n\nまた、この仕組みでは、アプリケーションからはMySQLのデータのみを更新すれば良いため、アプリケーション側で更新処理を\n\n変更する必要がありませんし、Groongaが起動していなくてもデータの更新が可能です。\n\nさらに、データの削除についてもデフォルトで対応しているので追加の設定は必要ありません。\n\nまたサービスではなく、定期的に同期を実行する仕組みなので安定しやすいです。\n\n\n\nGroonga独自のクエリーを覚える学習コストとGroonga⇔MySQL間のデータをマッピングする設定は必要ですが、\n\nそこまでやってしまえばMySQLのデータをほぼリアルタイムでGroongaに取り込みPerlから最新のデータを\n\n高速に全文検索できます。\n\n\n\n本発表では、どうやってPerlからGroongaを使ってMySQLのデータを全文検索するのか、その仕組みと\n\n上記で紹介したよくあるアプローチの課題がこの仕組みでどのように解消されるのかを紹介します。",
      duration: 40,
      authors: [
        {
          author: '堀本 泰弘',
          author_icon: './images/speaker/komainu8.jpg',
          github_url: "https://github.com/komainu8",
          twitter_url: "",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 112,
      title: 'prototype大全',
      description: "prototypeは、Perlのサブルーチンの引数の振る舞いを変える機能です。一見するとただの記号の並びに見えるprototypeですが、実は身近なところに潜んでいて、Perlプログラムを支えているのです。このトークでは、そんなprototypeについて魅力や活用法などを交じえながらお話しする予定です。\n\n\n\n* try/catchから始めるprototype入門\n\n* こんなにあるぞ！！ prototype\n\n* 気になるあのサブルーチンのprototype、コッソリ教えます\n\n* prototypeを使う/使わない理由",
      duration: 20,
      authors: [
        {
          author: 'うたがわきき',
          author_icon: './images/speaker/utgwkk.png',
          github_url: "https://github.com/utgwkk",
          twitter_url: "https://twitter.com/utgwkk",
          blog_url: "https://blog.utgw.net/",
        }
      ],
    },
    {
      talk_id: 113,
      title: 'qron: Cloud Native Cron Alternativeの今',
      description: "タスクを定期的にexactly-onceで実行する仕組みを2020年代に構築するとしたらどんな方法があるでしょうか?\n\ncronを動かすホストをひとつだけ用意する……それはSPOFと表裏一体です。Cloud Nativeという言葉が広がりつつある今、クラウドサービスの力を借りてスケーラブルなcron alternativeを実現できないでしょうか?\n\n\n\n世にあるFaaSなどはat-least-onceは実現されていてもexactly-onceはなかなか実現されていません。\n\nしかしわたしたちはexactly-onceを求めているのです。自然界にexactly-onceはあるのです。\n\n\n\n今回は、クラウドサービスを組み合わせてタスクをexactly-onceで定期的に実行するシステムの構築を探求し実現した事例について紹介します。\n\nさらにこのシステムを数年運用して遭遇した出来事やその解決策についてもお話しすることでcron alternativeの《リアル》についても紹介します。\n\n\n\n予定しているトピック:\n\n- 共有排他ロックの実装\n\n- 統合されたエラーレポートの実現\n\n\n\n扱う主なキーワード:\n\n- AWS Step Functions\n\n- cron\n\n- Observability",
      duration: 40,
      authors: [
        {
          author: 'aereal',
          author_icon: './images/speaker/aereal.jpg',
          github_url: "https://github.com/aereal",
          twitter_url: "https://twitter.com/aereal",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 114,
      title: 'tRPCとCloudflare PagesとCloudflare D1で実現する 安くて速くて堅牢なWebアプリケーション',
      description: "Cloudflare PagesとCloudflare D1を組み合わせることで、外部サービスを使わずにデータを永続化したWebアプリケーションを簡単に作成できるようになりました。\n\n\n\nさらに、tRPCを組み合わせることで、エンドツーエンドで型安全な環境を加えることができます。\n\n\n\n本トークでは、シンプルなWebアプリケーションの作成を通して、Cloudflare PagesやCloudflare D1, tRPCの魅力をお伝えしたいと思います。",
      duration: 20,
      authors: [
        {
          author: '外山智史（とやま さとし）',
          author_icon: './images/speaker/toyamarinyon.jpg',
          github_url: "https://github.com/toyamarinyon",
          twitter_url: "https://twitter.com/toyamarinyon",
          blog_url: "https://sat0shi.dev/",
        }
      ],
    },
    {
      talk_id: 115,
      title: 'あなたの知らない(かもしれない)コアモジュール 2023',
      description: "Perlのバイナリに同梱して配布されるモジュールはコアモジュールと呼ばれます。 YAPC::Japan::Onlineではそこからいくつかを紹介しましたが、時間の都合で紹介しきれなかったものや、その後重要度が増したものもあります。このトークではそのような、知っておくと役に立つ、あるいはそうでもないコアモジュールを時間の限り紹介します。",
      duration: 20,
      authors: [
        {
          author: '白方 健太郎',
          author_icon: './images/speaker/argrath.png',
          github_url: "https://github.com/argrath",
          twitter_url: "https://twitter.com/argrath",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 116,
      title: 'あの日ハッカーに憧れた自分が、「ハッカーの呪縛」から解き放たれるまで',
      description: "YAPC::Asiaで憧れたハッカー集団の末席に、新卒という形で頭から飛び込んだのが約10年前。YAPCを始めとした様々な技術コミュニティにお世話になり、時にはスタッフや運営・スピーカーとして貢献しながら、少しずつ歩を進めてきました。\n\nキャリアとしては事業会社のエンジニア・リードエンジニアを経て、現在はCTOとしてエンジニアリングだけでない様々なロールを担っていますが、これまでのキャリア選択の傍らには常に「ハッカー」への憧れがありました。\n\nいつしかそれが自分への呪縛となっていたこと、そして様々な葛藤と試行錯誤を経て、ようやくそれから解き放たれつつあることに、最近気づきつつあります。\n\nエンジニアとして、時にはロールを変えながらサバイブする皆さんに。またかつての悩める自分に、ちょっとしたヒントをおすそ分けできるようなトークにしたいと考えています。",
      duration: 40,
      authors: [
        {
          author: 'あらたま',
          author_icon: './images/speaker/ar-tama.jpg',
          github_url: "https://github.com/ar-tama",
          twitter_url: "https://twitter.com/ar_tama",
          blog_url: "https://note.com/ar_tama",
        }
      ],
    },
    {
      talk_id: 117,
      title: 'ジョブキューシステムFireworqのアーキテクチャ設計と運用時のベストプラクティス',
      description: "OSSのジョブキューシステムであるFireworqはGoで書かれていますが、TheSchwartzやMogileFSなどのPerlプロダクトにおけるジョブキュー部分の実装に大きな影響を受けて開発されました。FireworqはHTTPでやりとりするため言語非依存で、ジョブがたくさん溜まっている状態でもパフォーマンスが下がらない、キューを動的に複数作成できるなどの特徴があります。\n\n\n\nこのトークでは、Fireworqのこれらの設計に至った経緯や、はてなブックマークのシステム内で実際に運用する上で見えてきたベストプラクティスなどを紹介します。",
      duration: 20,
      authors: [
        {
          author: '伊奈 林太郎',
          author_icon: './images/speaker/tarao.png',
          github_url: "https://github.com/tarao",
          twitter_url: "https://twitter.com/oarat",
          blog_url: "https://tarao.hatenablog.com/",
        }
      ],
    },
    {
      talk_id: 118,
      title: 'デプロイ今昔物語 〜CGIからサーバーレスまで〜',
      description: "みなさま日々Webアプリケーションのデプロイにいそしんでいるかと思います。\n\nデプロイの風景は数年前と比べるとだいぶ様相が変わっています。Perlなどの開発言語は一緒であっても、デプロイの形態は変わっているという方が多いかと思います。\n\nこのトークでは、歴史のあるWebアプリ開発言語であるPerlの例を元に2000年頃のCGIとレンタルサーバーを用いたデプロイから、現代のFaaSによるデプロイまでをたどる旅をご紹介します。\n\n\n\nトークタイトルの「デプロイ」が指す範囲\n\n* Webサーバーへの反映方法\n\n  * 例\n\n    * FTPやscpによるアップロード\n\n    * git pullやtarball, dockerなどを用いたPull型デプロイ\n\n* Webサーバーの更新方法\n\n  * 例\n\n    * ファイル更新だけで完了する形態\n\n    * プロセスの入れ替えを用いたGraceful restart\n\n    * サーバ毎のローリングリスタート\n\n* Webアプリケーションから各端末へコンテンツを配信するためのWebアプリケーションの駆動形態\n\n  * 例\n\n    * CGI\n\n    * mod_perl\n\n    * FastCGI\n\n    * Plack/PSGI\n\n    * サーバーレス\n\n\n\nこのトークで語る内容\n\n* Perlによる各デプロイの形態の解説・デモ\n\n\n\nこのトークの対象者\n\n* Webアプリケーション開発者\n\n* Webアプリケーションがどのように開発され、Web上にデプロイされてきたかを知りたい方",
      duration: 40,
      authors: [
        {
          author: 'macopy',
          author_icon: './images/speaker/mackee.png',
          github_url: "https://github.com/mackee",
          twitter_url: "https://twitter.com/mackee_w",
          blog_url: "https://mackee.hatenablog.com/",
        }
      ],
    },
    {
      talk_id: 119,
      title: 'マルチテナントの実現における技術選定の審美眼とDB設計 ~ PostgreSQLを添えて ~',
      description: "マルチテナントを提供する上で一番の悩みどころはどこでしょうか。\n\n私はテナント毎のデータの分割とセキュリティの確保、そして共有情報の分割です。\n\n\n\nこの一つの答えに私がtryした結果が、PostgreSQLの活用です。\n\nPostgreSQLにはRow Level Securityをはじめとした様々な機能があり、アプリケーションから意識することなく、マルチテナントを実現することができます。\n\n\n\n現実的な負担の無い設計を実現しながらも、十分なパフォーマンスを出したい。\n\nそんな欲張りな皆さんに必ずcatch（納得）してもらえるような実践的なテクニックから、実際の設計における技術選定の勘所をお伝えしたいと思います。\n\n\n\n# 対象者\n\n- Webサービスなどでマルチテナントを実装したいと考えている人\n\n- 既存のマルチテナントで苦しんでいて、リプレースを考えている人\n\n- シングルテナント形式で実装に限界を感じている人",
      duration: 40,
      authors: [
        {
          author: '曽根 壮大',
          author_icon: './images/speaker/soudai.png',
          github_url: "https://github.com/soudai",
          twitter_url: "https://twitter.com/soudai1025",
          blog_url: "https://soudai.hatenablog.com/",
        }
      ],
    },
    {
      talk_id: 120,
      title: 'どこでも動くWebフレームワークをつくる',
      description: "HonoというWebフレームワークをつくっています。Honoは速いです。ただし、それだけではありません。HonoはどんなJavaScriptのランタイムでも動きます。少なくとも、Cloudflare\n\nWorkers、Deno、Bun、Fastly\n\nCompute@Edge、Lagonの6つのランタイムで動きます。本トークではHonoがなぜどこでも動くのか、そのために努力していることを紹介します。",
      duration: 20,
      authors: [
        {
          author: 'Yusuke Wada',
          author_icon: './images/speaker/yusukebe.jpg',
          github_url: "https://github.com/yusukebe",
          twitter_url: "https://twitter.com/yusukebe",
          blog_url: "https://yusukebe.com",
        }
      ],
    },
    {
      talk_id: 121,
      title: '入門 障害対応 「サービス運用はTry::Catchの繰り返しだよ、ワトソン君」',
      description: "サービスの運用では開発環境やステージング環境で入念に動作検証をしても本番環境では想定していない事態が起きます。\n\nサービス障害発生時に障害に対して適切な対応を取れるかどうかはユーザーへの影響度に大きく起因します。\n\nまた、全ての障害を100%なくすことは現実的ではないため発生してしまった障害について「調査・分析・対応」をできるようにしておく必要があります。\n\n一方で障害対応は一部のエンジニアが「調査・分析・対応」行ってしまい中々ノウハウが他のエンジニアに広まっていかず属人化してしまうという課題があります。\n\nそういった課題に対してGMOペパボでは「Playbook」の運用や「障害対応訓練」の実施などを通して解決へアプローチを行いました。\n\n本セッションはサービスの運用で発生する障害対応に課題を感じている組織やエンジニアを対象として属人化してしまいがちな「障害対応能力」そのものにフォーカスをし、どのように向上させるのかというノウハウを紹介します。",
      duration: 20,
      authors: [
        {
          author: '渡部 龍一',
          author_icon: './images/speaker/ryuichi1208.png',
          github_url: "https://github.com/ryuichi1208",
          twitter_url: "https://twitter.com/ryuichi_1208",
          blog_url: "https://ryuichi1208.hateblo.jp/",
        }
      ],
    },
    {
      talk_id: 122,
      title: '地方のエンジニアが作る日本のITコミュニティの未来',
      description: "私のキャリアの直近3~4年は、地方のエンジニア採用を通じて労働環境づくりや、技術コミュニティづくりをして今後も貢献してきたいと考えております。\n\n今後、労働力減少や少子高齢化に伴う問題などを通じて、関東一極型の働き方は難しくなり、より関西やそれ以外の地域でのエンジ二アの活躍場所や、居住地を含めた柔軟な働き方は避けられなくなっていくと思っています。\n\n私自身の経験を通じて、地域ITコミュティの重要性や京都のエンジニアが活躍することにより来る明るい未来についてお話したいと思います。",
      duration: 20,
      authors: [
        {
          author: '東岡和也',
          author_icon: './images/speaker/Tooka_91.png',
          github_url: "",
          twitter_url: "https://twitter.com/Tooka_91",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 123,
      title: '売上と開発環境を同時に改善するために既存のPerl Web アプリケーションをどのようにリプレイスするか',
      description: "新規サービスをPerlで開発する事例は減りました。しかし、Perlで開発され、現在も利益が出ているサービスはあります。弊社のサービスもその一つです。今後もサービスを出来るだけ長くユーザーに届けるために、弊社ではバックエンドをPerlで開発する決断をしました。この決断の背景と、モダンPerlへのリプレイスの過程を紹介します。紹介の一部は吉祥寺.pmで発表済みで、当日のYAPCではより詳細に発表できればと思います。https://speakerdeck.com/masashi_sutou/jin-nian-yatutakoto-20nian-yi-shang-sok-kuwebsabisunoripureisu-shu-itakodosi-gamodankamotosi-uperl",
      duration: 20,
      authors: [
        {
          author: '須藤将史',
          author_icon: './images/speaker/kurotyann9696.jpg',
          github_url: "",
          twitter_url: "https://twitter.com/kurotyann9696",
          blog_url: "",
        }
      ],
    },
    {
      talk_id: 124,
      title: '小さく始め、長く続けるOSS開発と貢献',
      description: "私の初めてのOSS体験にはPerlが深く関与しています。PerlのおかげでOSS活動が始められたと言っても過言ではありません。\n\n\n\n私はこれまでOSSに対して多くのpull reuqestを送り、マージされたものは1000を超えます。多くは自分のOSSに対してのものですが、それ以外でも、海外を含む数百以上のリポジトリにpull requestが取り込まれています。 \n\n\n\npull requestを送ることに対して最初は心理的障壁があるのはよくわかります。しかし、慣れてしまえば怖くありません。実際、私が送った変更の中には、コードを一文字だけ直したものや、単純作業によるものも数多くあります。 \n\n\n\n本トークでは私が実際に送ったPull Requestを幾つか取り上げながら、そういうどのようにすれば多くの人がOSSに貢献できるようになるかを話したいと思います。\n\n\n\n具体的には以下のようなテーマについて取り上げます。\n\n\n\n- Perlに小さなモジュールが多いからこその貢献のしやすさ\n\n- 貢献しやすいリポジトリを見つける方法\n\n- pull requestを送る上での心構え\n\n- 技術選定するときにまずPull Reuqestを送ってみるということ\n\n- OSSを引き継ぐことの美味しさ\n\n- OSSを他者に引き継ぐことの感慨\n\n- OSSを始める方法",
      duration: 40,
      authors: [
        {
          author: 'Songmu',
          author_icon: './images/speaker/Songmu.jpg',
          github_url: "https://github.com/Songmu",
          twitter_url: "https://twitter.com/songmu",
          blog_url: "https://songmu.jp/riji/",
        }
      ],
    },
    {
      talk_id: 125,
      title: '日常業務のカイゼンで図る開発チームへの貢献',
      description: "「カイゼン」は業務や作業に対して今ある状態の問題やより良くなるアイデアに気付き、解決し続けることでより良い状態へ昇華し続けることを指し、一般的に改善とは区別されます。\n\n\n\n私たちエンジニアがカイゼンを行うにあたって何に取り組むべきでしょうか。この悩みについて、新卒3年目が1年間かけて行った日常業務における業務負荷の調査と、そのカイゼンのために行った活動、その影響について紹介します。\n\n\n\nこのトークでは8年以上運用が続いているPerlで作られたソーシャルゲーム運用を題材に、1回のデプロイに数時間かかる作業の工数の削減や、週に何度も行われる定形作業の自動化、エンジニア以外にも作業できる人を増やした資料の整備など話す予定です。\n\n\n\nこれにより、メンバーを希望の別チームへ配属させるなど、チームの人数減少に耐えられる体制を築きました。\n\n\n\n以下の悩みを持つ方に聞いて欲しいテーマとなっています。\n\n- 運用の手作業が多くて開発の時間が取れなくて困っている\n\n- どこからをカイゼンすれば良いのかわからなくて始めから躓いている\n\n- 自主的にチームと関わるにはどうすればいいのかわからないといった悩みがある",
      duration: 20,
      authors: [
        {
          author: 'koluku',
          author_icon: './images/speaker/koluku.png',
          github_url: "https://github.com/koluku",
          twitter_url: "https://twitter.com/koluku",
          blog_url: "https://koluku.com",
        }
      ],
    },
    {
      talk_id: 126,
      title: '様々な環境へコマンドラインツールを提供する上での苦労とその対策',
      description: "所属しているLaunchable Inc, ではユーザーの自動テスト基盤からデータを送ってもらうためにコマンドラインツール launchableinc/cli (以下 cli ※Python製)をユーザーに提供しています。 我々のサービスを利用してくれているユーザーはエンタープライズな規模から小さいチームまで、使用しているOS、CIプラットフォーム、言語のバージョンなどユーザーによって異なるため多岐に渡ります。それによりcliを開発/運用する上で様々な問題に直面してきました。 本発表ではそのような多岐にわたるユーザーの環境へ提供するためのcliの技術スタック/開発体制など紹介しながら今まで遭遇した課題とその対応策の一部を紹介したいと思います。 本発表を通して開発の参考になればと思っています。\n\n\n\n",
      duration: 20,
      authors: [
        {
          author: 'Konboi ',
          author_icon: './images/speaker/Konboi.png',
          github_url: "https://github.com/Konboi",
          twitter_url: "https://twitter.com/Konboi",
          blog_url: "https://blog.konboi.com",
        }
      ],
    },
    {
      talk_id: 127,
      title: 'CloudWatchエージェントとCloudWatchで行うアプリケーション監視',
      description: "システム・アプリケーションの稼働環境として、AWS EC2を採用しているケースも多いと思いますが、その際にシステム・アプリケーションの監視をどう行うかが課題になるケースがあると思います。\n\n\n\nその解決方法の一つとして、私達は「CloudWatchエージェント」というAWS公式ツールを利用してEC2内に出力されるログをCloudWatch Logsに転送し、CloudWatchにて監視する方法を採択しました。\n\n\n\n今回はそれに関して、CloudWatchエージェントの紹介、および具体的にCloudWatchにて監視を行い、最終的に異常発生をSlackで通知する...といったことをAWSだけで実現する方法について、紹介したいと思います。",
      duration: 40,
      authors: [
        {
          author: '鈴木 正樹(SUZUKI Masaki)',
          author_icon: './images/speaker/smt7174.jpg',
          github_url: "https://github.com/smt7174",
          twitter_url: "https://twitter.com/makky12",
          blog_url: "https://makky12.hatenablog.com/",
        }
      ],
    }
  ]
};
