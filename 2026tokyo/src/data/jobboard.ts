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
// 遷移先 URL が未提出の会社はコメントアウトして非表示にしている。
import colsisBanner from "../assets/jobboard/colsis.jpg";
import denaBanner from "../assets/jobboard/dena.jpg";
import findyBanner from "../assets/jobboard/findy.jpg";
import flattSecurityBanner from "../assets/jobboard/flatt-security.jpg";
import freakoutBanner from "../assets/jobboard/freakout.jpg";
import hacomonoBanner from "../assets/jobboard/hacomono.jpg";
import hatenaBanner from "../assets/jobboard/hatena.png";
import jobDraftBanner from "../assets/jobboard/job-draft.png";
import mercariBanner from "../assets/jobboard/mercari.png";
import mobileFactoryBanner from "../assets/jobboard/mobile-factory.jpg";
import reproBanner from "../assets/jobboard/repro.png";
import sansanBanner from "../assets/jobboard/sansan.png";
import showroomBanner from "../assets/jobboard/showroom.jpg";
import sixapartBanner from "../assets/jobboard/sixapart.jpg";
import smartbankBanner from "../assets/jobboard/smartbank.png";
import smarthrBanner from "../assets/jobboard/smarthr.jpg";
import supaBanner from "../assets/jobboard/supa.jpg";
import tebikiBanner from "../assets/jobboard/tebiki.jpg";

export const jobBoardItems = [
  { name: "株式会社COLSIS", url: "https://colsis.jp/recruit/", banner: colsisBanner },
  { name: "株式会社ディー・エヌ・エー", url: "https://dena.com/jp/recruit/?utm_source=yapctokyo&utm_medium=banner&utm_campaign=yapc2026_banner&utm_id=yapc2026", banner: denaBanner },
  { name: "ファインディ株式会社", url: "https://herp.careers/v1/findy/requisition-groups/14c4a661-5e48-40c5-99d0-ea657b8b4c04", banner: findyBanner },
  { name: "GMO Flatt Security株式会社", url: "https://recruit.flatt.tech/job", banner: flattSecurityBanner },
  { name: "株式会社フリークアウト", url: "https://www.fout.co.jp/recruit/", banner: freakoutBanner },
  { name: "株式会社hacomono", url: "https://www.hacomono.co.jp/recruit/engineer/", banner: hacomonoBanner },
  { name: "株式会社はてな", url: "https://hatena.co.jp/recruit", banner: hatenaBanner },
  { name: "転職ドラフト", url: "https://job-draft.jp/?utm_source=site&utm_medium=conference&utm_campaign=allconference&utm_term=yapc2026", banner: jobDraftBanner },
  { name: "株式会社メルカリ", url: "https://careers.mercari.com/jobs/engineering/engineering/", banner: mercariBanner },
  { name: "株式会社モバイルファクトリー", url: "https://recruit.mobilefactory.jp/recruit/", banner: mobileFactoryBanner },
  { name: "Repro株式会社", url: "https://herp.careers/v1/repro/requisition-groups/07e6d8e3-4222-45f0-8b02-4cabf43aed4a", banner: reproBanner },
  { name: "Sansan株式会社", url: "https://media.sansan-engineering.com/", banner: sansanBanner },
  { name: "SHOWROOM株式会社", url: "https://recruit.showroom.co.jp/?refer=yapc2026", banner: showroomBanner },
  { name: "シックス・アパート株式会社", url: "https://www.sixapart.jp/jobs/", banner: sixapartBanner },
  { name: "株式会社スマートバンク", url: "https://smartbank.co.jp/recruit/engineer-summary/", banner: smartbankBanner },
  { name: "株式会社SmartHR", url: "https://recruit.smarthr.co.jp/engineer/", banner: smarthrBanner },
  { name: "supa, inc.", url: "https://supa.co.jp", banner: supaBanner },
  { name: "Tebiki株式会社", url: "https://techblog.tebiki.co.jp/", banner: tebikiBanner },
  // バナーは src/assets/jobboard/ に置いてあるが、遷移先 URL が未提出のため伏せている。
  // { name: "さくらインターネット株式会社", url: ???, banner: sakuraBanner },
  // { name: "株式会社クロステック・マネジメント（京都芸術大学）", url: ???, banner: xtmBanner },
] as const;
