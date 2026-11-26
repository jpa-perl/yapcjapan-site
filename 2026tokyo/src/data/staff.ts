// スタッフ。役割ごとのグループに分けて載せる。
//
// アイコンは src/assets/staff/ に置き、スポンサーのロゴと同じく import して
// icon に渡す。
//
// アイコンのない方は icon を、リンク先のない方は url を持たせない。
//
// 追加の例:
//
//   import exampleIcon from "../assets/staff/example.png";
//
//   { name: "example", url: "https://x.com/example", icon: exampleIcon },
import type { ImageMetadata } from "astro";

export interface StaffMember {
  name: string;
  url?: string;
  icon?: ImageMetadata;
}

export interface StaffGroup {
  id: string;
  name: string;
  members: readonly StaffMember[];
}

export const staffGroups: readonly StaffGroup[] = [
  {
    id: "organizer",
    name: "Organizer",
    members: [],
  },
  {
    id: "staff",
    name: "Staff",
    members: [],
  },
];
