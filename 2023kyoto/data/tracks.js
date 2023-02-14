const trackAtsv = `
5	オープニング
5	スポンサーセッション(会場)
10	休憩(移動)
40	2023年春のPerl	charsbar	1
5	質疑応答
5	休憩
20	売上と開発環境を同時に改善するために既存のPerl Web アプリケーションをどのようにリプレイスするか	須藤将史
5	質疑応答
5	休憩
20	my$talk=qr{\b((?:ir)?reg(?:ular )?exp(?:ressions?)?)\b}ig;	Dan Kogai
5	質疑応答
20	休憩
20	ORM - Object-relational mapping	Takafumi ONAKA
5	質疑応答
5	休憩
40	マルチテナントの実現における技術選定の審美眼とDB設計 ~ PostgreSQLを添えて ~	曽根 壮大
5	休憩
60	昼休憩
40	ゲスト	moznion
5	質疑応答
5	休憩
40	デプロイ今昔物語 〜CGIからサーバーレスまで〜	macopy
5	質疑応答
20	休憩
50	ゲスト	上原先生/宮脇先生
5	質疑応答
5	休憩
5	スポンサーセッション(ゲスト)
40	ゲスト	nekokak
5	質疑応答
15	休憩
5	接続テスト
30	ライトニングトーク
40	キーノート	onihsi
5	クロージング
`;

const trackBtsv = `
10
10	休憩(移動)
40	小さく始め、長く続けるOSS開発と貢献	Songmu
5	質疑応答
5	休憩
20	ジョブキューシステムFireworqのアーキテクチャ設計と運用時のベストプラクティス	伊奈 林太郎
5	質疑応答
5	休憩
20	tRPCとCloudflare PagesとCloudflare D1で実現する 安くて速くて堅牢なWebアプリケーション	外山智史（とやま さとし）
5	質疑応答
20	休憩
20	JavaScriptのASTと戯れる	Pasta-K
5	質疑応答
5	休憩
40	"普通"のWebアプリでWASMを活用する	niboshi
5	質疑応答
60	公開収録ランチセッション	Helpfeel
40	qron: Cloud Native Cron Alternativeの今	aereal
5	質疑応答
5	休憩
40	4PB(ペタバイト)を超えるオブジェクトストレージをハードウェアからアプリケーションにかけて運用するノウハウ	三上　烈史（みかみ　つよし）
5	質疑応答
20	休憩
20	prototype大全	うたがわきき
5	質疑応答
5	休憩
20	あなたの知らない(かもしれない)コアモジュール 2023	白方 健太郎
5	質疑応答
5	休憩
20	世界で一番速いWebフレームワークをつくる	Yusuke Wada
5	質疑応答
5	休憩
20	honoの3+1のルーターと、そこにつながるPRがプロジェクトにもたらしたもの	天野 卓
5	質疑応答
`

const trackCtsv = `
10
5	休憩(移動)
50	ぶつかり稽古
5	休憩
20	地方のエンジニアが作る日本のITコミュニティの未来	東岡和也
5	質疑応答
5	休憩
20	日常業務のカイゼンで図る開発チームへの貢献	koluku
5	質疑応答
20	休憩
20	入門 障害対応 「サービス運用はTry::Catchの繰り返しだよ、ワトソン君」	渡部 龍一
5	質疑応答
5	休憩
40	あの日ハッカーに憧れた自分が、「ハッカーの呪縛」から解き放たれるまで	あらたま
5	休憩
60	昼休憩
40	CloudWatchエージェントとCloudWatchで行うアプリケーション監視	鈴木 正樹(SUZUKI Masaki)
5	質疑応答
5	休憩
40	Perlと全文検索エンジンGroongaでMySQLのデータを高速に全文検索する	堀本 泰弘
5	質疑応答
20	休憩
20	DNS権威サービスへのDDoSとハイパフォーマンスなベンチマーカ	長野雅広
5	質疑応答
5	休憩
20	llsとcachectlから学ぶ、Goでシステムプログラミングをする方法	catatsuy
5	質疑応答
5	休憩
20	様々な環境へコマンドラインツールを提供する上での苦労とその対策	Konboi
5	質疑応答
5	休憩
20	my new error...	井手優太
5	質疑応答
`

const tsv2talks = (tsv) => {
  return tsv.trim().split(/\n/).map((line) => {
    const col = line.split(/\t/);
    return {
      duration: parseInt(col[0], 10),
      title: col[1],
      author: col[2],
      talk_id: col[3],
    };
  });
};

module.exports = {
	trackA: tsv2talks(trackAtsv),
	trackB: tsv2talks(trackBtsv),
	trackC: tsv2talks(trackCtsv),
};
