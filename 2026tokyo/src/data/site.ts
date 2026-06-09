import lestrratPhoto from '../assets/lestrrat.jpg';
import fujiwaraPhoto from "../assets/fujiwara.jpg";
import hitodePhoto from "../assets/hitode.jpg";

const speakerDescription =
  "人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が、一般の人々の最高の願望として宣言されたので、";
const lestrratDescription =
  "[jwx](https://github.com/lestrrat-go/jwx)や [peco](https://github.com/peco/peco) の開発責任者。Go/Perl/Cプログラマ、講演、執筆、動画プロデュースなどを生業としている。過去には技術カンファレンスの運営に関わり続けていた（元[YAPC::Asia Tokyo](http://yapcasia.org)主催、元[builderscon](https://builderscon.io)主催）。3児の父。[株式会社メルカリ](https://about.mercari.com)所属。";
const fujiwaraDescription =
  "2025年よりさくらインターネット株式会社。クラウド制御基盤の開発・運用に従事\n2011〜2024年までは面白法人カヤック\nOSS開発者。代表作として Amazon ECSデプロイツールecspresso ほか多数\nWebパフォーマンスチューニングコンテストISUCON 優勝4回、出題3回\n最近の趣味はマネージドサービスの隙間を埋める隙間家具のようなツールをGoで作ってOSSにすること、ランニング";
const hitodeDescription =
  "株式会社はてな エンジニアリングマネージャー。\n2009年にアルバイトとして入社、2012年に新卒入社。\nはてなブログやGigaViewerの開発に携わる。\nコードのデバッグとチームのデバッグを交互に行う。\n好きなスライドは、文字の大きいスライド。";

export const siteInfo = {
  title: "YAPC::Tokyo 2026",
  dates: [
    { date: "2026-11-27", label: "2026年11月27日", weekday: "金", note: "前夜祭" },
    { date: "2026-11-28", label: "2026年11月28日", weekday: "土", note: "1日目 + 懇親会" },
    { date: "2026-11-29", label: "2026年11月29日", weekday: "日", note: "2日目" },
  ],
  venue: {
    name: "東京ビッグサイト（東京国際展示場）",
    address: "東京都江東区有明3-11-1",
    accessUrl: "https://www.bigsight.jp/visitor/access/",
    mapUrl: "https://maps.app.goo.gl/BeYmd6iD2tQV2v478",
  },
  description: [
    [
      { text: "YAPC::Tokyo 2026" },
      { text: "は" },
      {
        text: "一般社団法人Japan Perl Association",
        emphasis: "link",
        href: "https://japan.perlassociation.org/",
      },
      { text: "が主催する、" },
      { text: "10周年の節目" },
      { text: "を迎える技術カンファレンスです。" },
    ],
    [
      {
        text: "YAPCは主にPerl Mongerのためのカンファレンスですが、「",
      },
      { text: "やり方は一つだけじゃない", emphasis: "mark" },
      { text: "」（" },
      {
        text: "TMTOWTDI; There's more than one way to do it.",
        emphasis: "small",
      },
      {
        text: "）というPerlのモットーを体現するように、実際にはPerlに限らず様々な技術的なトピックについて話し合う場となっています。",
        lineBreakAfter: true,
      },
      {
        text: "単に講演を聴くだけではなく、多様な人々が直接出会い、熱量を共有できるお祭りのような一体感こそが、YAPCの最大の魅力です。",
        lineBreakAfter: true,
      },
      {
        text: "そのため参加者の層も非常に幅広く、「Perlのイベントだから」と敬遠せずに飛び込んでいただければ、そのオープンな熱気に、良い意味で期待を大きく裏切られるはずです。",
      },
    ],
    [
      { text: "今回の開催にあたり、私たちは「" },
      { text: "パッチワーク", emphasis: "mark" },
      { text: "」というテーマを掲げました。", lineBreakAfter: true },
      {
        text: "小さな布片を縫い合わせて一つの大きな作品を作るその技法のように、そして異なるシステムを繋ぐ",
      },
      { text: "グルー言語であるPerl" },
      {
        text: "のスピリットのように、エンジニア一人ひとりの日々の営みを起点として、多様な技術や人々が織り合わされ、",
      },
      { text: "確かな絆" },
      { text: "を育む場を目指します。" },
    ],
  ],
  blogUrl: "https://blog.yapcjapan.org/",
} as const;

export const featuredButton = {
  text: "スポンサー募集中",
  url: "https://blog.yapcjapan.org/entry/yapc-tokyo-2026-call-for-sponsors",
} as const

export const navItems = [
  { label: "おしらせ", labelEn: "Announcement", href: "#announcements" },
  { label: "スピーカー", labelEn: "Guest Speakers", href: "#speakers" },
  {
    label: "行動指針",
    labelEn: "Code of Conduct",
    href: "https://japan.perlassociation.org/entry/yapc/code_of_conduct",
  },
] as const;

export const announcements = [
  {
    date: "2026-06-01",
    displayDate: "2026.06.01",
    title: "ご協賛のお願い",
    href: "https://blog.yapcjapan.org/entry/yapc-tokyo-2026-call-for-sponsors",
  },
  {
    date: "2026-05-27",
    displayDate: "2026.05.27",
    title: "ロゴが完成しました",
    href: "https://blog.yapcjapan.org/entry/2026/05/27/180000",
  },
] as const;

export const keynoteSpeaker = {
  name: "牧大輔",
  nameEn: "lestrrat",
  role: "Keynote Speaker",
  photo: lestrratPhoto,
  description: lestrratDescription,
} as const;

export const speakers = [
  {
    name: "藤原俊一郎",
    nameEn: "fujiwara",
    photo: fujiwaraPhoto,
    description: fujiwaraDescription,
  },
  {
    name: "",
    nameEn: "",
    description: "Coming soon ...",
  },
  {
    name: "",
    nameEn: "",
    description: "Coming soon ...",
  },
  /*
  {
    name: "hitode909",
    nameEn: "hitode909",
    photo: hitodePhoto,
    description: hitodeDescription,
  },
  {
    name: "田中 棚卸",
    nameEn: "Tanao Tanaka",
    description: speakerDescription,
  },
  {
    name: "田中 棚卸",
    nameEn: "Tanao Tanaka",
    description: speakerDescription,
  },
  */
] as const;
