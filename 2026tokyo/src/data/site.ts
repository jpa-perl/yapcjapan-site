const speakerDescription =
  "人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が、一般の人々の最高の願望として宣言されたので、";

export const siteInfo = {
  title: "YAPC::Tokyo 2026",
  dates: [
    { date: "2026-11-27", label: "2026年11月27日(金)", note: "前夜祭" },
    { date: "2026-11-28", label: "2026年11月28日(土)", note: "1日目" },
    { date: "2026-11-29", label: "2026年11月29日(日)", note: "2日目 + アフターパーティ" },
  ],
  venue: {
    name: "東京ビッグサイト（東京国際展示場）",
    accessUrl: "#",
    mapUrl: "#",
  },
  description:
    "吾輩（わがはい）は猫である。名前はまだ無い。\nどこで生れたかとんと見当（けんとう）がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪（どうあく）な種族であったそうだ。この書生というのは時々我々を捕（つかま）えて煮（に）て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌（てのひら）に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生",
  blogUrl: "#",
} as const;

export const navItems = [
  { label: "おしらせ", labelEn: "Announcement", href: "#announcements" },
  { label: "行動指針", labelEn: "Code of Conduct", href: "#code-of-conduct" },
  { label: "スピーカー", labelEn: "Guest Speakers", href: "#speakers" },
] as const;

export const announcements = [
  {
    date: "2026-11-11",
    displayDate: "2026.11.11",
    title: "チケットの販売を開始しました",
    href: "#",
  },
  {
    date: "2026-11-11",
    displayDate: "2026.11.11",
    title:
      "ちょっと長いタイトルの場合のお知らせはどういうレイアウトにするのがいいのか",
    href: "#",
  },
  {
    date: "2026-11-11",
    displayDate: "2026.11.11",
    title: "チケットの販売を開始しました",
    href: "#",
  },
] as const;

export const keynoteSpeaker = {
  name: "田中 棚卸",
  nameEn: "Tanao Tanaka",
  role: "Keynote Speaker",
  description: speakerDescription,
} as const;

export const speakers = [
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
] as const;
