// スポンサー情報。プラン構成・社名・リンク先は fortee の公開データに基づく。
// https://fortee.jp/yapc-tokyo-2026/api/sponsors
//
// ロゴは各社から提出されたものを Figma の Sponsor ページで 512x512 の枠に収め、
// そこから 2 倍の 1024x1024 で書き出して src/assets/sponsors/ に置いている。
// 枠に対するロゴの大きさは Figma 側で決めているため、差し替えるときは Figma を
// 更新してから書き出す。ファイル名は Figma のフレーム名に合わせている。
// https://www.figma.com/design/qcH3SBPscSAnYV9LMtJy1k/YAPC--Tokyo-2026?node-id=343-2
//
// 提出フォーマットは会社ごとに PNG、SVG、Illustrator とまちまちで、その差は
// Figma に取り込む時点で吸収している。
//
// ロゴご提供待ちの会社はコメントアウトして非表示にしている。
import andpadLogo from "../assets/sponsors/andpad.png";
import cloudflareLogo from "../assets/sponsors/cloudflare.png";
import colsisLogo from "../assets/sponsors/colsis.png";
import denaLogo from "../assets/sponsors/dena.png";
import diverseLogo from "../assets/sponsors/diverse.png";
import epochLogo from "../assets/sponsors/epoch.png";
import esmLogo from "../assets/sponsors/esm.png";
import findyLogo from "../assets/sponsors/findy.png";
import flattSecurityLogo from "../assets/sponsors/flatt-security.png";
import freakoutLogo from "../assets/sponsors/freakout.png";
import gendaLogo from "../assets/sponsors/genda.png";
import greeLogo from "../assets/sponsors/gree.png";
import hacomonoLogo from "../assets/sponsors/hacomono.png";
import hatenaLogo from "../assets/sponsors/hatena.png";
import hirerooLogo from "../assets/sponsors/hireroo.png";
import kayacLogo from "../assets/sponsors/kayac.png";
import kodamariLogo from "../assets/sponsors/kodamari.png";
import layerxLogo from "../assets/sponsors/layerx.png";
import linkageLogo from "../assets/sponsors/linkage.png";
import mcd3Logo from "../assets/sponsors/mcd3.png";
import mercariLogo from "../assets/sponsors/mercari.png";
import mobileFactoryLogo from "../assets/sponsors/mobile-factory.png";
import mutoCtLogo from "../assets/sponsors/muto-ct.png";
import optimLogo from "../assets/sponsors/optim.png";
import reproLogo from "../assets/sponsors/repro.png";
import sakuraLogo from "../assets/sponsors/sakura.png";
import sansanLogo from "../assets/sponsors/sansan.png";
import showroomLogo from "../assets/sponsors/showroom.png";
import sixapartLogo from "../assets/sponsors/sixapart.png";
import smartbankLogo from "../assets/sponsors/smartbank.png";
import smarthrLogo from "../assets/sponsors/smarthr.png";
import supaLogo from "../assets/sponsors/supa.png";
import tebikiLogo from "../assets/sponsors/tebiki.png";
import vaddyLogo from "../assets/sponsors/vaddy.png";
import xtmLogo from "../assets/sponsors/xtm.png";
import zauelLogo from "../assets/sponsors/zauel.png";

export const sponsorPlans = [
  {
    id: "perl-sponsor",
    name: "Perl Sponsor",
    sponsors: [
      { name: "株式会社hacomono", url: "https://www.hacomono.co.jp/", logo: hacomonoLogo },
      { name: "シックス・アパート株式会社", url: "https://www.sixapart.jp/", logo: sixapartLogo },
      { name: "株式会社ディー・エヌ・エー", url: "https://dena.com/jp/", logo: denaLogo },
      { name: "さくらインターネット株式会社", url: "https://www.sakura.ad.jp/", logo: sakuraLogo },
    ],
  },
  {
    id: "platinum-sponsor",
    name: "Platinum Sponsor",
    sponsors: [
      { name: "株式会社スマートバンク", url: "https://smartbank.co.jp/recruit/engineer-summary/", logo: smartbankLogo },
      // ご提供いただいたロゴは横組み。縦組みのロックアップは 2024hiroshima
      // (src/images/sponsor/hireroo.png) にあるが、Figma では横組みを採用している。
      { name: "株式会社ハイヤールー", url: "https://hireroo.io/", logo: hirerooLogo },
      // ご提供いただいたのはブランドキット一式の zip。その中の
      // ANDPAD_RGB_for Screen/svg/Secondary Logo_Vertical_RGB.svg を使用
      // （横組みの Primary は正方形枠に対して横長すぎるため）。
      { name: "株式会社アンドパッド", url: "https://engineer.andpad.co.jp/", logo: andpadLogo },
      { name: "supa, inc.", url: "https://supa.co.jp/", logo: supaLogo },
      { name: "Tebiki株式会社", url: "https://tebiki.co.jp/", logo: tebikiLogo },
      { name: "ファインディ株式会社", url: "https://findy.co.jp/company/", logo: findyLogo },
      { name: "株式会社クロステック・マネジメント（京都芸術大学）", url: "https://xtm.jp/", logo: xtmLogo },
      { name: "GMO Flatt Security株式会社", url: "https://flatt.tech/", logo: flattSecurityLogo },
      { name: "Cloudflare Japan株式会社", url: "https://www.cloudflare.com/", logo: cloudflareLogo },
      // { name: "株式会社CARTA HOLDINGS", url: "https://cartaholdings.co.jp/engineering?utm_source=yapc2026&utm_medium=Paid+Other&utm_campaign=yapc2026", logo: ??? },
      // { name: "タイムリープ株式会社", url: "https://timeleap.co.jp/", logo: ??? },
      // { name: "株式会社Helpfeel", url: "https://corp.helpfeel.com", logo: ??? },
    ],
  },
  {
    id: "gold-sponsor",
    name: "Gold Sponsor",
    sponsors: [
      { name: "SHOWROOM株式会社", url: "https://www.showroom-live.com/", logo: showroomLogo },
      { name: "株式会社はてな", url: "https://hatena.co.jp", logo: hatenaLogo },
      { name: "Repro株式会社", url: "https://company.repro.io/", logo: reproLogo },
      { name: "株式会社メルカリ", url: "https://about.mercari.com/", logo: mercariLogo },
      { name: "株式会社フリークアウト", url: "https://www.fout.co.jp/freakout/", logo: freakoutLogo },
      { name: "Sansan株式会社", url: "https://jp.corp-sansan.com/", logo: sansanLogo },
      { name: "株式会社COLSIS", url: "https://colsis.jp", logo: colsisLogo },
      { name: "株式会社モバイルファクトリー", url: "https://www.mobilefactory.jp/", logo: mobileFactoryLogo },
      { name: "株式会社SmartHR", url: "https://hello-world.smarthr.co.jp/", logo: smarthrLogo },
      // { name: "株式会社ネコトーストラボ", url: "https://nekotoast-lab.com/", logo: ??? },
      // { name: "株式会社サンリオ", url: "https://corporate.sanrio.co.jp/", logo: ??? },
      // { name: "転職ドラフト", url: "https://job-draft.jp/?utm_source=site&utm_medium=conference&utm_campaign=allconference&utm_term=yapc2026", logo: ??? },
    ],
  },
  {
    id: "silver-sponsor",
    name: "Silver Sponsor",
    sponsors: [
      { name: "VAddy", url: "https://vaddy.net/ja/", logo: vaddyLogo },
      { name: "合同会社武藤電算機技術", url: "https://muto-ct.jp", logo: mutoCtLogo },
      { name: "面白法人カヤック", url: "https://www.kayac.com/", logo: kayacLogo },
      { name: "有限会社エポック", url: "https://j-epoch.com/", logo: epochLogo },
    ],
  },
  {
    id: "bronze-sponsor",
    name: "Bronze Sponsor",
    sponsors: [
      { name: "こだまリサーチ株式会社", url: "https://www.kodamari.com/", logo: kodamariLogo },
      { name: "株式会社Diverse", url: "https://diverse-inc.co.jp/", logo: diverseLogo },
      { name: "エムシーディースリー株式会社", url: "https://www.mcd3.co.jp/recruit", logo: mcd3Logo },
      { name: "株式会社LayerX", url: "https://layerx.co.jp/", logo: layerxLogo },
      { name: "株式会社リンケージ", url: "https://linkage-inc.co.jp/", logo: linkageLogo },
      { name: "株式会社グリー", url: "https://cp.gree.net/", logo: greeLogo },
      { name: "株式会社GENDA", url: "https://genda.jp/", logo: gendaLogo },
      { name: "株式会社オプティム", url: "https://www.optim.co.jp/?utm_source=event&utm_medium=referral&utm_campaign=YPAC2026", logo: optimLogo },
      { name: "株式会社永和システムマネジメント", url: "https://agile.esm.co.jp/", logo: esmLogo },
      { name: "合同会社ザウエル", url: "https://zauel.co.jp/", logo: zauelLogo },
      // { name: "湘.なんか", url: "https://shonanka.connpass.com/", logo: ??? },
    ],
  },
] as const;
