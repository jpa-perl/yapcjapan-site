// スポンサー情報。プラン構成・社名・リンク先は fortee の公開データに基づく。
// https://fortee.jp/yapc-tokyo-2026/api/sponsors
//
// ロゴは fortee のスポンサーカスタムフィールド logo-png に提出されたものを
// src/assets/sponsors/ に配置している（公開 API にロゴは含まれないため手動取得）。
// https://fortee.jp/yapc-tokyo-2026/organizer/sponsor/custom-fields/view/9998f862-da85-4ce9-9b35-544a5c232903
//
// ロゴご提供待ちの会社はコメントアウトして非表示にしている。
import andpadLogo from "../assets/sponsors/andpad.svg";
import denaLogo from "../assets/sponsors/dena.svg";
import diverseLogo from "../assets/sponsors/diverse.png";
import hacomonoLogo from "../assets/sponsors/hacomono.png";
import hatenaLogo from "../assets/sponsors/hatena.png";
import hirerooLogo from "../assets/sponsors/hireroo.png";
import kodamariLogo from "../assets/sponsors/kodamari.svg";
import mcd3Logo from "../assets/sponsors/mcd3.png";
import mercariLogo from "../assets/sponsors/mercari.png";
import mutoCtLogo from "../assets/sponsors/muto-ct.svg";
import reproLogo from "../assets/sponsors/repro.svg";
import showroomLogo from "../assets/sponsors/showroom.png";
import sixapartLogo from "../assets/sponsors/sixapart.png";
import smartbankLogo from "../assets/sponsors/smartbank.svg";
import supaLogo from "../assets/sponsors/supa.svg";
import tebikiLogo from "../assets/sponsors/tebiki.svg";
import vaddyLogo from "../assets/sponsors/vaddy.svg";

export const sponsorPlans = [
  {
    id: "perl-sponsor",
    name: "Perl Sponsor",
    sponsors: [
      { name: "株式会社hacomono", url: "https://www.hacomono.co.jp/", logo: hacomonoLogo },
      { name: "シックス・アパート株式会社", url: "https://www.sixapart.jp/", logo: sixapartLogo },
      { name: "株式会社ディー・エヌ・エー", url: "https://dena.com/jp/", logo: denaLogo },
      // { name: "さくらインターネット株式会社", url: "https://www.sakura.ad.jp/", logo: ??? },
    ],
  },
  {
    id: "platinum-sponsor",
    name: "Platinum Sponsor",
    sponsors: [
      { name: "株式会社スマートバンク", url: "https://smartbank.co.jp/recruit/engineer-summary/", logo: smartbankLogo },
      // ご提供いただいたロゴは横組みで、正方形枠だと極端に小さくなる。
      // 2024hiroshima (src/images/sponsor/hireroo.png) の縦組みロックアップを流用。
      { name: "株式会社ハイヤールー", url: "https://hireroo.io/", logo: hirerooLogo },
      // ご提供いただいたのはブランドキット一式の zip。その中の
      // ANDPAD_RGB_for Screen/svg/Secondary Logo_Vertical_RGB.svg を使用
      // （横組みの Primary は正方形枠に対して横長すぎるため）。
      { name: "株式会社アンドパッド", url: "https://engineer.andpad.co.jp/", logo: andpadLogo },
      { name: "supa, inc.", url: "https://supa.co.jp/", logo: supaLogo },
      { name: "Tebiki株式会社", url: "https://tebiki.co.jp/", logo: tebikiLogo },
      // { name: "ファインディ株式会社", url: "https://findy.co.jp/company/", logo: ??? },
      // { name: "株式会社CARTA HOLDINGS", url: "https://cartaholdings.co.jp/engineering?utm_source=yapc2026&utm_medium=Paid+Other&utm_campaign=yapc2026", logo: ??? },
      // { name: "タイムリープ株式会社", url: "https://timeleap.co.jp/", logo: ??? },
      // { name: "株式会社クロステック・マネジメント（京都芸術大学）", url: "https://xtm.jp/", logo: ??? },
      // { name: "GMO Flatt Security株式会社", url: "https://flatt.tech/", logo: ??? },
      // { name: "Cloudflare Japan株式会社", url: "https://www.cloudflare.com/", logo: ??? },
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
      // { name: "株式会社フリークアウト", url: "https://www.fout.co.jp/freakout/", logo: ??? },
      // { name: "Sansan株式会社", url: "https://jp.corp-sansan.com/", logo: ??? },
      // { name: "株式会社COLSIS", url: "https://colsis.jp", logo: ??? },
      // { name: "株式会社ネコトーストラボ", url: "https://nekotoast-lab.com/", logo: ??? },
      // { name: "株式会社モバイルファクトリー", url: "https://www.mobilefactory.jp/", logo: ??? },
      // { name: "株式会社サンリオ", url: "https://corporate.sanrio.co.jp/", logo: ??? },
      // { name: "株式会社SmartHR", url: "https://hello-world.smarthr.co.jp/", logo: ??? },
      // { name: "転職ドラフト", url: "https://job-draft.jp/?utm_source=site&utm_medium=conference&utm_campaign=allconference&utm_term=yapc2026", logo: ??? },
    ],
  },
  {
    id: "silver-sponsor",
    name: "Silver Sponsor",
    sponsors: [
      { name: "VAddy", url: "https://vaddy.net/ja/", logo: vaddyLogo },
      { name: "合同会社武藤電算機技術", url: "https://muto-ct.jp", logo: mutoCtLogo },
      // { name: "面白法人カヤック", url: "https://www.kayac.com/", logo: ??? },
      // { name: "有限会社エポック", url: "https://j-epoch.com/", logo: ??? },
    ],
  },
  {
    id: "bronze-sponsor",
    name: "Bronze Sponsor",
    sponsors: [
      { name: "こだまリサーチ株式会社", url: "https://www.kodamari.com/", logo: kodamariLogo },
      { name: "株式会社Diverse", url: "https://diverse-inc.co.jp/", logo: diverseLogo },
      { name: "エムシーディースリー株式会社", url: "https://www.mcd3.co.jp/recruit", logo: mcd3Logo },
      // { name: "株式会社LayerX", url: "https://layerx.co.jp/", logo: ??? },
      // { name: "株式会社リンケージ", url: "https://linkage-inc.co.jp/", logo: ??? },
      // { name: "株式会社グリー", url: "https://cp.gree.net/", logo: ??? },
      // { name: "湘.なんか", url: "https://shonanka.connpass.com/", logo: ??? },
      // { name: "株式会社GENDA", url: "https://genda.jp/", logo: ??? },
      // { name: "株式会社オプティム", url: "https://www.optim.co.jp/?utm_source=event&utm_medium=referral&utm_campaign=YPAC2026", logo: ??? },
      // { name: "株式会社永和システムマネジメント", url: "https://agile.esm.co.jp/", logo: ??? },
      // { name: "合同会社ザウエル", url: "https://zauel.co.jp/", logo: ??? },
    ],
  },
] as const;
