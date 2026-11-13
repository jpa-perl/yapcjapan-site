// ジョブボード。スポンサー特典として、各社の採用ページへバナーで送客する。
//
// バナーと遷移先は fortee のスポンサーカスタムフィールド job-board-image /
// job-board-url に提出されたもの。公開 API には含まれないため、管理画面から
// 手動で取得している。
// https://fortee.jp/yapc-tokyo-2026/organizer/sponsor/custom-fields/index
//
// バナーは Figma の JobBoard ページで 1200x600 に収めてから書き出している。
// ファイル名はスポンサーのロゴと同じ綴りに揃えてある。
// https://www.figma.com/design/qcH3SBPscSAnYV9LMtJy1k/YAPC--Tokyo-2026?node-id=368-385
//
// Helpfeel と CARTA HOLDINGS は Figma を通していない。提出時点で 1200x600
// だったので、ImageMagick で既存の JPEG と同じ品質 (q=88) に変換しただけ。
// タイムリープは提出されたロゴ (1334x832) をそのまま置いている。2:1 の枠には
// 切らずに収まる。
//
// アンドパッドは fortee の不具合で提出できず、10/1 にメールで受領した。その後
// 運営が fortee に登録したものを取得している。
//
// HelloCloud（旧 supa, inc.）は社名変更に伴い、11/12 にメールで受領した 1200x600 の
// PNG をそのまま置いている。遷移先は変更のご連絡がないため据え置き。
//
// 遷移先 URL が未提出の会社は url を持たせず、リンクなしでバナーだけを載せる。
import andpadBanner from "../assets/jobboard/andpad.png";
import cartaBanner from "../assets/jobboard/carta.jpg";
import colsisBanner from "../assets/jobboard/colsis.jpg";
import denaBanner from "../assets/jobboard/dena.jpg";
import findyBanner from "../assets/jobboard/findy.jpg";
import flattSecurityBanner from "../assets/jobboard/flatt-security.jpg";
import freakoutBanner from "../assets/jobboard/freakout.jpg";
import hacomonoBanner from "../assets/jobboard/hacomono.jpg";
import hatenaBanner from "../assets/jobboard/hatena.png";
import hellocloudBanner from "../assets/jobboard/hellocloud.png";
import helpfeelBanner from "../assets/jobboard/helpfeel.jpg";
import jobDraftBanner from "../assets/jobboard/job-draft.png";
import mercariBanner from "../assets/jobboard/mercari.png";
import mobileFactoryBanner from "../assets/jobboard/mobile-factory.jpg";
import reproBanner from "../assets/jobboard/repro.png";
import sakuraBanner from "../assets/jobboard/sakura.jpg";
import sansanBanner from "../assets/jobboard/sansan.png";
import showroomBanner from "../assets/jobboard/showroom.jpg";
import sixapartBanner from "../assets/jobboard/sixapart.jpg";
import smartbankBanner from "../assets/jobboard/smartbank.png";
import smarthrBanner from "../assets/jobboard/smarthr.jpg";
import tebikiBanner from "../assets/jobboard/tebiki.jpg";
import timeleapBanner from "../assets/jobboard/timeleap.png";
import xtmBanner from "../assets/jobboard/xtm.jpg";

export const jobBoardItems = [
  { name: "株式会社アンドパッド", url: "https://hrmos.co/pages/andpad/jobs/9", banner: andpadBanner },
  { name: "株式会社CARTA HOLDINGS", url: "https://hrmos.co/pages/cartaholdings/jobs/zero-e09?utm_source=yapc2026&utm_medium=Paid+Other&utm_campaign=yapc2026", banner: cartaBanner },
  { name: "株式会社COLSIS", url: "https://colsis.jp/recruit/", banner: colsisBanner },
  { name: "株式会社ディー・エヌ・エー", url: "https://dena.com/jp/recruit/?utm_source=yapctokyo&utm_medium=banner&utm_campaign=yapc2026_banner&utm_id=yapc2026", banner: denaBanner },
  { name: "ファインディ株式会社", url: "https://herp.careers/v1/findy/requisition-groups/14c4a661-5e48-40c5-99d0-ea657b8b4c04", banner: findyBanner },
  { name: "GMO Flatt Security株式会社", url: "https://recruit.flatt.tech/job", banner: flattSecurityBanner },
  { name: "株式会社フリークアウト", url: "https://www.fout.co.jp/recruit/", banner: freakoutBanner },
  { name: "株式会社hacomono", url: "https://www.hacomono.co.jp/recruit/engineer/", banner: hacomonoBanner },
  { name: "株式会社はてな", url: "https://hatena.co.jp/recruit", banner: hatenaBanner },
  { name: "株式会社HelloCloud", url: "https://supa.co.jp", banner: hellocloudBanner },
  { name: "株式会社Helpfeel", url: "https://recruit-engineer.helpfeel.com/?utm_source=yapc_tokyo_2026&utm_medium=sponsor&utm_campaign=jobboard", banner: helpfeelBanner },
  { name: "転職ドラフト", url: "https://job-draft.jp/?utm_source=site&utm_medium=conference&utm_campaign=allconference&utm_term=yapc2026", banner: jobDraftBanner },
  { name: "株式会社メルカリ", url: "https://careers.mercari.com/jobs/engineering/engineering/", banner: mercariBanner },
  { name: "株式会社モバイルファクトリー", url: "https://recruit.mobilefactory.jp/recruit/", banner: mobileFactoryBanner },
  { name: "Repro株式会社", url: "https://herp.careers/v1/repro/requisition-groups/07e6d8e3-4222-45f0-8b02-4cabf43aed4a", banner: reproBanner },
  { name: "さくらインターネット株式会社", banner: sakuraBanner },
  { name: "Sansan株式会社", url: "https://media.sansan-engineering.com/", banner: sansanBanner },
  { name: "SHOWROOM株式会社", url: "https://recruit.showroom.co.jp/?refer=yapc2026", banner: showroomBanner },
  { name: "シックス・アパート株式会社", url: "https://www.sixapart.jp/jobs/", banner: sixapartBanner },
  { name: "株式会社スマートバンク", url: "https://smartbank.co.jp/recruit/engineer-summary/", banner: smartbankBanner },
  { name: "株式会社SmartHR", url: "https://recruit.smarthr.co.jp/engineer/", banner: smarthrBanner },
  { name: "Tebiki株式会社", url: "https://techblog.tebiki.co.jp/", banner: tebikiBanner },
  { name: "タイムリープ株式会社", url: "https://timeleap.co.jp/recruit", banner: timeleapBanner },
  { name: "株式会社クロステック・マネジメント（京都芸術大学）", banner: xtmBanner },
] as const;
