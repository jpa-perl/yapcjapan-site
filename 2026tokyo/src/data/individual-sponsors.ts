// 個人スポンサー。
//
// アイコンは src/assets/individual-sponsors/ に置き、スポンサーのロゴと同じく
// import して icon に渡す。
//
// アイコンのない方は icon を、リンク先のない方は url を持たせない。
//
// 追加の例:
//
//   import exampleIcon from "../assets/individual-sponsors/example.png";
//
//   { name: "example", url: "https://x.com/example", icon: exampleIcon },
import type { ImageMetadata } from "astro";

export interface IndividualSponsor {
  name: string;
  url?: string;
  icon?: ImageMetadata;
}

export const individualSponsors: readonly IndividualSponsor[] = [];
