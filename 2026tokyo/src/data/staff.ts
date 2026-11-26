// スタッフ。役割ごとのグループに分けて載せる。
//
// このファイルとアイコン (src/assets/staff/) は、スタッフの一覧 (TSV) から
// スクリプトで生成している。直接は編集せず、一覧を直して生成し直す。
//
// グループの中の並びは一覧の行順。
// アイコンはディレクトリごとまとめて読み込み、icon() にファイル名を渡して引く。
// アイコンのない方には共通のロゴ (src/assets/noicon.png) を当てる。
// リンク先のない方は url を持たせない。
import noIcon from "../assets/noicon.png";
import type { ImageMetadata } from "astro";

const icons = import.meta.glob<ImageMetadata>("../assets/staff/*", {
  eager: true,
  import: "default",
});

function icon(fileName: string): ImageMetadata {
  const image = icons[`../assets/staff/${fileName}`];
  if (image === undefined) throw new Error(`アイコンがありません: ${fileName}`);
  return image;
}

export interface StaffMember {
  name: string;
  url?: string;
  icon: ImageMetadata;
}

export interface StaffGroup {
  id: string;
  name: string;
  members: readonly StaffMember[];
}

export const staffGroups: readonly StaffGroup[] = [
  {
    id: "organizer",
    name: "コアスタッフ",
    members: [
      { name: "karupanerura", url: "https://github.com/karupanerura", icon: icon("karupanerura.png") },
      { name: "nyanco", url: "https://x.com/nyanco15", icon: icon("nyanco.png") },
      { name: "toya", icon: icon("toya.jpg") },
      { name: "ryuho", icon: icon("ryuho.jpg") },
      { name: "masawada", url: "https://x.com/masawada", icon: icon("masawada.jpg") },
      { name: "ヨーコ", icon: noIcon },
      { name: "皮しばき", icon: icon("member-5598c6b6.png") },
      { name: "Pasta-K", url: "https://x.com/pastak", icon: icon("pasta-k.png") },
      { name: "Takumi", icon: icon("takumi.png") },
      { name: "りーう", icon: icon("member-9dc4cb35.png") },
      { name: "teckl", icon: icon("teckl.png") },
      { name: "ysaito", url: "https://x.com/ysaito8015", icon: icon("ysaito.png") },
      { name: "himura467", url: "https://x.com/himura4679", icon: icon("himura467.png") },
      { name: "sadanaga", icon: icon("sadanaga.png") },
      { name: "Takane", icon: icon("takane.jpg") },
      { name: "uzulla", icon: icon("uzulla.png") },
    ],
  },
  {
    id: "staff",
    name: "当日スタッフ",
    members: [
      { name: "Kaitou", url: "https://x.com/Kaitou1192", icon: icon("kaitou.jpg") },
      { name: "yakumi", icon: icon("yakumi.jpg") },
      { name: "sironekotoro", icon: icon("sironekotoro.png") },
      { name: "fkuMnk", icon: icon("fkumnk.jpg") },
      { name: "Yuta Goto", url: "https://x.com/gggooottto", icon: icon("yuta-goto.png") },
      { name: "Naoki Kawamura", url: "https://x.com/iwonder118", icon: icon("naoki-kawamura.png") },
      { name: "KojiKa", url: "https://x.com/_ko2ka_", icon: icon("kojika.jpg") },
      { name: "nsfisis", url: "https://x.com/nsfisis", icon: icon("nsfisis.png") },
      { name: "なかっちゃん", url: "https://x.com/kaoru_nkchan", icon: icon("member-5ca31593.jpg") },
      { name: "KOHE", url: "https://x.com/kohe_osaka", icon: icon("kohe.jpg") },
      { name: "ksatoshi", icon: icon("ksatoshi.jpg") },
      { name: "osyoyu", icon: icon("osyoyu.png") },
      { name: "Gunzi", icon: icon("gunzi.jpg") },
      { name: "asumikam", url: "https://x.com/asumikam", icon: icon("asumikam.jpg") },
      { name: "karyo", icon: icon("karyo.jpg") },
      { name: "nanseki", icon: icon("nanseki.jpg") },
      { name: "モブエンジニア", url: "https://x.com/mob_engineer", icon: icon("member-db980e29.jpg") },
      { name: "ぞぬえぐぜ", icon: icon("member-1e4690b7.png") },
      { name: "えりりん", icon: icon("member-ccaa8880.jpg") },
      { name: "すずきまさし", icon: icon("member-3bfaf226.jpg") },
      { name: "cohalz", icon: icon("cohalz.png") },
      { name: "honchang", url: "https://x.com/honchang_", icon: icon("honchang.jpg") },
      { name: "taiseiue", url: "https://x.com/taiseiue", icon: icon("taiseiue.png") },
      { name: "monmon", icon: icon("monmon.png") },
      { name: "xaicron", url: "https://x.com/xaicron", icon: icon("xaicron.jpg") },
    ],
  },
];
