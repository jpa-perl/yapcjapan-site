/*
タブ区切りで
1. 所要時間
2. タイトル
3. 発表者
4. 詳細モーダルのID
*/

const trackAtsv = `
5	オープニング
5	スポンサーセッション 	 株式会社Helpfeel
10	休憩
40	2023年春のPerl	charsbar	102
5	質疑応答
5	休憩
20	売上と開発環境を同時に改善するために既存のPerl Web アプリケーションをどのようにリプレイスするか	須藤将史	123
5	質疑応答
5	休憩
20	my$talk=qr{\\b((?:ir)?reg(?:ular )?exp(?:ressions?)?)\\b}ig;	Dan Kogai	109
5	質疑応答
20	休憩
20	ORM - Object-relational mapping	Takafumi ONAKA	110
5	質疑応答
5	休憩
40	マルチテナントの実現における技術選定の審美眼とDB設計 ~ PostgreSQLを添えて ~	曽根 壮大	119
5	休憩
60	昼休憩
40	【ゲスト】ソフトウェアエンジニアリングサバイバルガイド: 廃墟を直す、廃墟を出る、廃墟を壊す、あるいは廃墟に暮らす、廃墟に死す	川上 大喜	4
5	質疑応答
5	休憩
40	デプロイ今昔物語 〜CGIからサーバーレスまで〜	macopy	118
5	質疑応答
20	休憩
50	【ゲスト】法と技術の交差点	上原 哲太郎/宮脇 正晴	3
5	質疑応答
5	休憩
5	スポンサーセッション 	 Hachioji.pm
40	ゲスト	小林 篤	2
5	質疑応答
15	休憩
5	接続テスト
30	ライトニングトーク
40	キーノート	大西 康裕	1
5	クロージング
`;

const trackBtsv = `
10
10	休憩
40	小さく始め、長く続けるOSS開発と貢献	Songmu	124
5	質疑応答
5	休憩
20	ジョブキューシステムFireworqのアーキテクチャ設計と運用時のベストプラクティス	伊奈 林太郎	117
5	質疑応答
5	休憩
20	tRPCとCloudflare PagesとCloudflare D1で実現する 安くて速くて堅牢なWebアプリケーション	外山智史（とやま さとし）	114
5	質疑応答
20	休憩
20	JavaScriptのASTと戯れる	Pasta-K	106
5	質疑応答
5	休憩
40	"普通"のWebアプリでWASMを活用する	niboshi	101
5	質疑応答
60	公開収録ランチセッション	株式会社Helpfeel
40	qron: Cloud Native Cron Alternativeの今	aereal	113
5	質疑応答
5	休憩
40	4PB(ペタバイト)を超えるオブジェクトストレージをハードウェアからアプリケーションにかけて運用するノウハウ	三上　烈史（みかみ　つよし）	103
5	質疑応答
20	休憩
20	prototype大全	うたがわきき	112
5	質疑応答
5	休憩
20	あなたの知らない(かもしれない)コアモジュール 2023	白方 健太郎	115
5	質疑応答
5	休憩
20	どこでも動くWebフレームワークをつくる	Yusuke Wada	120
5	質疑応答
5	休憩
20	honoの3+1のルーターと、そこにつながるPRがプロジェクトにもたらしたもの	天野 卓	105
5	質疑応答
`

const trackCtsv = `
10
10	休憩
45	企画	 TBD 	5
5	休憩
20	地方のエンジニアが作る日本のITコミュニティの未来	東岡和也	122
5	質疑応答
5	休憩
20	日常業務のカイゼンで図る開発チームへの貢献	koluku	125
5	質疑応答
20	休憩
20	入門 障害対応 「サービス運用はTry::Catchの繰り返しだよ、ワトソン君」	渡部 龍一	121
5	質疑応答
5	休憩
40	あの日ハッカーに憧れた自分が、「ハッカーの呪縛」から解き放たれるまで	あらたま	116
5	休憩
60	昼休憩
40	CloudWatchエージェントとCloudWatchで行うアプリケーション監視	鈴木 正樹(SUZUKI Masaki)	127
5	質疑応答
5	休憩
40	Perlと全文検索エンジンGroongaでMySQLのデータを高速に全文検索する	堀本 泰弘	111
5	質疑応答
20	休憩
20	DNS権威サービスへのDDoSとハイパフォーマンスなベンチマーカ	長野雅広	104
5	質疑応答
5	休憩
20	llsとcachectlから学ぶ、Goでシステムプログラミングをする方法	catatsuy	107
5	質疑応答
5	休憩
20	様々な環境へコマンドラインツールを提供する上での苦労とその対策	Konboi	126
5	質疑応答
5	休憩
20	my new error...	井手優太	108
5	質疑応答
`

const tsv2talks = (tsv) => {
  return tsv.trim().split(/\n/).map((line) => {
    const col = line.split(/\t/);
    return {
      duration: parseInt(col[0], 10),
      title: col[1] || '',
      author: col[2] || '',
      talk_id: col[3] || '',
    };
  });
};

module.exports = {
	trackA: tsv2talks(trackAtsv),
	trackB: tsv2talks(trackBtsv),
	trackC: tsv2talks(trackCtsv),
};
