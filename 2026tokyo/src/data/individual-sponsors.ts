// 個人スポンサー。
//
// このファイルとアイコン (src/assets/individual-sponsors/) は、個人スポンサーの
// 一覧 (TSV) からスクリプトで生成している。直接は編集せず、一覧を直して生成し直す。
//
// 並びは一覧の行順（チケット番号順）。
// アイコンはディレクトリごとまとめて読み込み、icon() にファイル名を渡して引く。
// アイコンのない方には共通のロゴ (src/assets/noicon.png) を当てる。
// リンク先のない方は url を持たせない。
import noIcon from "../assets/noicon.png";
import type { ImageMetadata } from "astro";

const icons = import.meta.glob<ImageMetadata>("../assets/individual-sponsors/*", {
  eager: true,
  import: "default",
});

function icon(fileName: string): ImageMetadata {
  const image = icons[`../assets/individual-sponsors/${fileName}`];
  if (image === undefined) throw new Error(`アイコンがありません: ${fileName}`);
  return image;
}

export interface IndividualSponsor {
  name: string;
  url?: string;
  icon: ImageMetadata;
}

export const individualSponsors: readonly IndividualSponsor[] = [
  { name: "mizzy", url: "https://github.com/mizzy", icon: icon("mizzy.jpg") },
  { name: "shige", url: "https://codenote.net/ja/about/", icon: icon("shige.jpg") },
  { name: "nyarla / kalaclista", url: "https://x.com/kalaclista", icon: icon("nyarla-kalaclista.png") },
  { name: "クドウマサヤ", url: "https://x.com/masaya_dev", icon: icon("member-c1d45038.jpg") },
  { name: "utgwkk", url: "https://x.com/utgwkk", icon: icon("utgwkk.png") },
  { name: "kobaken", url: "https://x.com/kfly8", icon: icon("kobaken.jpg") },
  { name: "pyama86", url: "https://x.com/pyama86", icon: icon("pyama86.jpg") },
  { name: "げんえい", url: "https://x.com/gennei", icon: icon("member-43f990e3.jpg") },
  { name: "hanhan1978", url: "https://x.com/hanhan1978", icon: icon("hanhan1978.jpg") },
  { name: "tohta", icon: icon("tohta.png") },
  { name: "turugina", url: "https://x.com/turugina", icon: icon("turugina.png") },
  { name: "moznion", url: "https://github.com/moznion", icon: icon("moznion.jpg") },
  { name: "sue445", url: "https://x.com/sue445", icon: icon("sue445.png") },
  { name: "Shoma Okamoto", url: "https://github.com/shmokmt", icon: icon("shoma-okamoto.png") },
  { name: "fuba", url: "https://x.com/fuba", icon: icon("fuba.jpg") },
  { name: "すぎゃーん", url: "https://github.com/sugyan", icon: icon("member-98c59492.png") },
  { name: "モブエンジニア", url: "https://x.com/mob_engineer", icon: icon("member-db980e29.jpg") },
  { name: "TAKAGI Masaki", icon: icon("takagi-masaki.jpg") },
  { name: "@teckl", url: "https://x.com/teckl", icon: icon("member-c1774ef5.jpg") },
  { name: "ikaruga", url: "https://x.com/uvb_76", icon: icon("ikaruga.jpg") },
  { name: "tsubasaxZZZ", icon: noIcon },
  { name: "side_tana", url: "https://x.com/side_tana", icon: icon("side-tana.jpg") },
  { name: "@kenchan", url: "https://bsky.app/profile/kunsan.space", icon: icon("member-56ca7578.webp") },
  { name: "NanTarou", icon: icon("nantarou.jpg") },
  { name: "Likk", url: "https://github.com/Likk/", icon: noIcon },
  { name: "sironekotoro", url: "https://x.com/sironekotoro", icon: icon("sironekotoro.png") },
  { name: "kosui", url: "https://x.com/kosui_me", icon: icon("kosui.png") },
  { name: "KojiKa", url: "https://x.com/_ko2ka_", icon: icon("kojika.jpg") },
  { name: "まかまか", url: "https://x.com/maka2_donzoko", icon: icon("member-da6569a1.png") },
  { name: "Songmu", url: "https://x.com/songmu", icon: icon("songmu.jpg") },
  { name: "kazeburo", url: "https://x.com/kazeburo", icon: icon("kazeburo.jpg") },
  { name: "vienosnotes", url: "https://x.com/VienosNotes", icon: icon("vienosnotes.jpg") },
  { name: "うなすけ", icon: icon("member-4d10ef0c.png") },
  { name: "プリン", url: "https://x.com/debility", icon: icon("member-f74f66b6.png") },
  { name: "Konboi / Ryosuke.Y", url: "https://github.com/Konboi", icon: icon("konboi-ryosuke-y.png") },
  { name: "FUMIO KAWAMOTO", url: "https://www.linkedin.com/in/fkawamoto", icon: noIcon },
  { name: "k-yoshida", url: "https://x.com/8maim0", icon: icon("k-yoshida.png") },
  { name: "toricor", url: "https://x.com/Toriyalex103", icon: icon("toricor.jpg") },
  { name: "tokubass", url: "https://x.com/toku_bass", icon: icon("tokubass.png") },
  { name: "Keisuke69", url: "https://x.com/Keisuke69", icon: icon("keisuke69.jpg") },
  { name: "inductor", icon: noIcon },
  { name: "tsucchi", url: "https://x.com/tsucchi", icon: icon("tsucchi.jpg") },
  { name: "jitsu", icon: noIcon },
  { name: "nasa9084", url: "https://x.com/nasa9084", icon: icon("nasa9084.png") },
  { name: "hakobe", url: "https://x.com/hakobe", icon: icon("hakobe.png") },
  { name: "gessy0129", url: "https://x.com/gessy0129", icon: icon("gessy0129.jpg") },
  { name: "dayflower", icon: noIcon },
  { name: "honyanya", url: "https://x.com/honyanyas", icon: icon("honyanya.jpg") },
  { name: "Kaitou", url: "https://x.com/Kaitou1192", icon: icon("kaitou.jpg") },
  { name: "jbking", url: "https://twitter.com/jbking", icon: icon("jbking.jpg") },
  { name: "makimoto", url: "https://x.com/makimoto", icon: icon("makimoto.jpg") },
  { name: "GOD-oda", url: "https://x.com/oskfjzp", icon: icon("god-oda.jpg") },
  { name: "i7a", icon: noIcon },
  { name: "さとだい", url: "https://x.com/dskst9", icon: icon("member-b590089f.jpg") },
  { name: "chan-san", url: "https://x.com/chan_san_jp", icon: icon("chan-san.jpg") },
  { name: "こえむ", url: "https://x.com/koemu", icon: icon("member-2797bdfb.jpg") },
  { name: "zoncoen", url: "https://x.com/zoncoen", icon: icon("zoncoen.jpg") },
  { name: "anoworl", url: "https://x.com/anoworl", icon: icon("anoworl.png") },
  { name: "chii1873", url: "https://x.com/chii1873", icon: icon("chii1873.jpg") },
  { name: "曽根 壮大", url: "https://x.com/soudai1025", icon: icon("member-15738683.gif") },
  { name: "dameninngenn", url: "https://x.com/dameninngenn", icon: icon("dameninngenn.jpg") },
  { name: "akiym", url: "https://x.com/akiym", icon: icon("akiym.png") },
  { name: "asgrcat", icon: noIcon },
  { name: "seri_k", url: "https://x.com/seri_k", icon: icon("seri-k.jpg") },
  { name: "vkgtaro", url: "https://x.com/vkgtaro", icon: icon("vkgtaro.jpg") },
  { name: "toritori0318", url: "https://x.com/toritori0318", icon: icon("toritori0318.jpg") },
  { name: "わいとん", url: "https://x.com/ytnobody", icon: icon("member-ba930dbd.png") },
  { name: "mihyaeru21", url: "https://x.com/mihyaeru21", icon: icon("mihyaeru21.jpg") },
  { name: "gomaaburamax", url: "https://x.com/gomaaburamax", icon: icon("gomaaburamax.jpg") },
  { name: "yumino", icon: noIcon },
  { name: "ngs", url: "https://github.com/ngs", icon: icon("ngs.jpg") },
  { name: "onk", url: "https://github.com/onk", icon: icon("onk.png") },
  { name: "ふしはらかん", url: "https://bsky.app/profile/kan.fushihara.net", icon: icon("member-afe041fd.webp") },
  { name: "YujiOtsu", icon: noIcon },
  { name: "hoto17296", url: "https://x.com/hoto17296", icon: icon("hoto17296.png") },
  { name: "yseto", icon: icon("yseto.png") },
  { name: "Yappo", url: "https://github.com/yappo", icon: icon("yappo.png") },
  { name: "kenjihsmt", icon: noIcon },
  { name: "Shota Ito", url: "https://x.com/st_1t", icon: icon("shota-ito.jpg") },
  { name: "cat2koban", url: "https://x.com/cat2koban", icon: icon("cat2koban.jpg") },
  { name: "kanufy", url: "https://x.com/makoga", icon: noIcon },
  { name: "川上", url: "https://x.com/sho130", icon: noIcon },
  { name: "一野瀬翔吾", url: "https://x.com/shogo82148", icon: icon("member-928dd7ca.png") },
  { name: "do_aki", url: "https://x.com/do_aki", icon: icon("do-aki.jpg") },
  { name: "まんじまる", url: "https://x.com/_manji0", icon: icon("member-ca44756e.jpg") },
  { name: "gugod", url: "https://g0v.social/@gugod", icon: icon("gugod.jpg") },
  { name: "asahima", url: "https://x.com/tanioris", icon: icon("asahima.jpg") },
  { name: "ex_SOUL", url: "https://x.com/ex_SOUL", icon: icon("ex-soul.jpg") },
  { name: "むねぽん", url: "https://x.com/__munepom__", icon: icon("member-e1c6f1d0.png") },
  { name: "allegrogiken", icon: icon("allegrogiken.jpg") },
  { name: "gern", icon: noIcon },
  { name: "masakyst", icon: icon("masakyst.jpg") },
  { name: "ぷみや", url: "https://x.com/guromityan", icon: icon("member-643fe57c.png") },
  { name: "nasu067", icon: noIcon },
  { name: "codehex", url: "https://x.com/codehex", icon: icon("codehex.png") },
  { name: "myfinder", url: "https://x.com/myfinder", icon: icon("myfinder.jpg") },
  { name: "Shinichiro Oba", url: "https://x.com/ooba", icon: icon("shinichiro-oba.png") },
  { name: "konojunya", url: "https://x.com/0xjj_official", icon: icon("konojunya.png") },
];
