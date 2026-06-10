# マスク付き写真の実装手順

## 概要

Figmaのマスクグループ（マスクVector + 写真Rectangle）を、CSS `mask-image` で再現する。写真とマスクは独立して動かせる構造にする。

## 1. マスクSVGのエクスポート

```js
// Figma Plugin API
const maskVector = await figma.getNodeByIdAsync(MASK_VECTOR_ID);
maskVector.isMask = false;  // 一時的に解除
const bytes = await maskVector.exportAsync({ format: 'SVG' });
maskVector.isMask = true;   // 復元
```

- マスクSVGには親グループの回転が**焼き込まれる**（パス座標に反映）
- fillを `black` に変更して保存（CSS maskでは黒=不透明）
- **SVGファイルの実際のwidth/heightを記録**（Figmaノードの寸法と異なる場合がある）

## 2. 写真のエクスポート

```js
// Figma Plugin API
const group = await figma.getNodeByIdAsync(PHOTO_GROUP_ID);
const clone = group.clone();
figma.currentPage.appendChild(clone);
clone.rotation = 0;  // 回転を解除

// 子ノードを探索してマスク解除
// maskVector.isMask = false;

// 写真Rectangleをスクリーンショット（回転なしの状態で）
const screenshot = await photoRect.screenshot();
clone.remove();
```

- 回転を解除した状態でエクスポートすることで、正しいアスペクト比の写真が得られる
- `get_screenshot` は回転の影響でサイズが変わるため、**クローン→回転解除→スクリーンショット**の手順が必要

## 3. HTML構造

```html
<div id="photo-xxx" class="absolute">
  <img src="/images/photo-xxx.png" alt="" class="size-full" />
</div>
```

- コンテナdiv + img のシンプルな構造
- `size-full` で写真がコンテナいっぱいに広がる

## 4. JSデータ定義

```js
{
  id: "photo-xxx",
  baseX: photoX - 640,     // 写真RectのFigma X座標 - デザイン中心(640)
  baseY: photoY,           // 写真RectのFigma Y座標（上端基準）
  w: photoWidth,           // 写真Rectの幅
  h: photoHeight,          // 写真Rectの高さ
  maskW: svgActualWidth,   // マスクSVGファイルの実際の幅
  maskH: svgActualHeight,  // マスクSVGファイルの実際の高さ
  maskX: adjustedX,        // マスクのX位置（回転補正後）
  maskY: adjustedY,        // マスクのY位置（回転補正後）
  rotate: 0,               // コンテナ回転（常に0、マスクに回転焼込み済み）
  imgRotate: -groupRot,    // 写真の回転（Figmaグループ回転の逆符号）
}
```

## 5. GSAP配置ロジック

```js
// コンテナ：写真サイズ、マスク適用
gsap.set(el, {
  left: cx + photo.baseX,
  top: photo.baseY,
  width: photo.w,
  height: photo.h,
  rotation: 0,
  maskImage: `url(${maskUrl})`,
  maskSize: `${photo.maskW}px ${photo.maskH}px`,
  maskPosition: `${photo.maskX}px ${photo.maskY}px`,
  maskRepeat: "no-repeat",
});

// 写真だけ回転
const img = el.querySelector("img");
gsap.set(img, { rotation: photo.imgRotate });
```

## 6. マスク位置の調整手順

1. まずFigmaのオフセット値をそのまま使う: `maskX = mask.x - photo.x`, `maskY = mask.y - photo.y`
2. maskW/maskHをマスクSVGファイルの実際のサイズに合わせる
3. imgRotateによる位置ずれを目視で補正（maskX/maskYを微調整）

## 7. 注意点

- マスクSVGのサイズは**Figmaノードの寸法と異なる**（回転焼込みでバウンディングボックスが変わる）
- 写真の回転は**コンテナではなくimg要素に適用**（マスクは回転済みのため）
- maskX/maskYは回転補正のため、Figmaの元値から微調整が必要
