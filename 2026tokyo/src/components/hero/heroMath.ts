import {
  ANNOUNCEMENT_HEADING_HEIGHT,
  ANNOUNCEMENT_TOP,
  CONTENT_WIDTH,
  DATE_CARD_HEIGHT,
  LOGO_HEIGHT,
  MOBILE_LAYOUT,
  PAGE_SAFE_AREA_X,
} from "./heroData";

export function remap(v: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + (v - inMin) * (outMax - outMin) / (inMax - inMin);
}

export function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

function getLayoutValue(vh: number, heightMin: number, heightMax: number, compact: number, roomy: number) {
  return clamp(remap(vh, heightMin, heightMax, compact, roomy), compact, roomy);
}

export function getMobileScale(vw: number) {
  return clamp(vw / MOBILE_LAYOUT.baseWidth, MOBILE_LAYOUT.scaleMin, MOBILE_LAYOUT.scaleMax);
}

export function getHeroLayout(vw: number, vh: number) {
  const widthScale = clamp((vw - PAGE_SAFE_AREA_X) / CONTENT_WIDTH, 0.68, 1);
  const mobileContentMax = vw < 640
    ? clamp(remap(vw, 320, 640, 0.54, 0.72), 0.54, 0.72)
    : 1;
  const mobileVisualScale = vw < 640
    ? clamp(remap(vw, 320, 640, 0.7, 0.86), 0.7, 0.86)
    : null;
  const headingPeek = vw < 640
    ? getLayoutValue(vh, 760, 840, 0, ANNOUNCEMENT_HEADING_HEIGHT)
    : getLayoutValue(vh, 660, 1040, 0, ANNOUNCEMENT_HEADING_HEIGHT);
  const waveHeight = Math.min(vw * 120 / 1300, 120);
  const targetHeroHeight = Math.max(vh - ANNOUNCEMENT_TOP - headingPeek, 620);

  const gap = vw < 640
    ? getLayoutValue(vh, 620, 920, 18, 44)
    : getLayoutValue(vh, 620, 1160, 22, 64);
  const desiredBottom = getLayoutValue(vh, 640, 1120, 82, 120);
  const heroBodyHeight = targetHeroHeight - waveHeight;
  const logoCenterY = heroBodyHeight * (vw < 640 ? 0.47 : 0.45);
  const scaleByTop = (logoCenterY - 72) * 2 / LOGO_HEIGHT;
  const scaleByBottom = (heroBodyHeight - desiredBottom - gap - logoCenterY) / ((LOGO_HEIGHT / 2) + DATE_CARD_HEIGHT);
  const contentScale = Math.min(clamp(Math.min(scaleByTop, scaleByBottom), 0.68, 1), widthScale, mobileContentMax);
  const paddingTop = Math.max(72, logoCenterY - (LOGO_HEIGHT * contentScale / 2));
  const paddingBottom = Math.max(
    heroBodyHeight - paddingTop - gap - ((LOGO_HEIGHT + DATE_CARD_HEIGHT) * contentScale),
    32,
  );

  return {
    contentScale,
    visualScale: mobileVisualScale ?? clamp(contentScale * 1.06, 0.7, 1),
    yCompress: clamp(heroBodyHeight / 1193, 0.58, 1),
    paddingTop,
    paddingBottom,
    gap,
    spread: clamp(remap(vw, 768, 1920, -50, 80), -70, 100),
  };
}
