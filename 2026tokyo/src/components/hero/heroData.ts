export const CONTENT_WIDTH = 468;
export const LOGO_HEIGHT = 483;
export const DATE_CARD_HEIGHT = 150;
export const PAGE_SAFE_AREA_X = 40;
export const ANNOUNCEMENT_TOP = 8;
export const ANNOUNCEMENT_HEADING_HEIGHT = 94;
export const MOBILE_BREAKPOINT = 768;

export const INTRO_ANIMATION = {
  center: {
    logoDelay: 0,
    dateDelay: 0.14,
    duration: 0.56,
    yPercentFrom: 105,
    ease: "power3.out",
  },
  shape: {
    delayMin: 0.05,
    delayMax: 0.48,
    duration: 0.66,
    fromScale: 0.72,
    overshootScale: 1.1,
    settleScale: 0.98,
    yFrom: 14,
    yOvershoot: -4,
    rotatePeakMin: 1.5,
    rotatePeakMax: 4,
  },
  photo: {
    delayMin: 0.12,
    delayMax: 0.58,
    duration: 0.72,
    fromScale: 0.78,
    overshootScale: 1.045,
    settleScale: 0.99,
    yFrom: 16,
    yOvershoot: -3,
    rotatePeakMin: 1,
    rotatePeakMax: 3,
  },
  priorityDelay: {
    "shape-green-center-top": 0,
    "shape-orange-stroke-right": 0.02,
    "shape-white-left": 0.04,
    "shape-purple-right-small": 0.08,
    "shape-blue-right-top": 0.1,
    "shape-blue-stroke-left": 0.12,
    "shape-gold-right": 0.16,
    "shape-gold-left-top": 0.18,
    "photo-right-1": 0.2,
    "photo-left-1": 0.22,
    "shape-gold-left-lower": 0.24,
    "photo-left-2": 0.28,
    "photo-right-2": 0.32,
    "shape-orange-stroke-center": 0.34,
    "shape-white-left-bottom": 0.38,
    "shape-green-right-bottom": 0.4,
    "photo-left-3": 0.42,
  },
} as const;

export const MOBILE_LAYOUT = {
  baseWidth: 375,
  heroHeight: 725,
  scaleMin: 0.86,
  scaleMax: 1.04,
  logo: { x: 63, y: 191.868, w: 250, h: 258.21 },
  dateCard: { x: 63, y: 475.078, w: 250, h: 88.331 },
  items: {
    "shape-white-left": { x: 20, y: 108, w: 124.824, h: 108.797, pd: 22 },
    "shape-gold-right": { x: 265, y: 356, w: 173.984, h: 186.675, pd: 40 },
    "shape-blue-stroke-left": { x: -60, y: 264, w: 171.355, h: 93.222, pd: 35 },
    "shape-green-center-top": { x: 174, y: 40, w: 97.876, h: 117.724, pd: 25 },
    "shape-orange-stroke-right": { x: 272, y: 82, w: 213.162, h: 115.966, pd: 30 },
    "shape-orange-stroke-center": { x: 127, y: 561, w: 112.49, h: 159.696, pd: 50 },
    "shape-green-right-bottom": { x: 221, y: 574, w: 143.527, h: 111.428, pd: 45 },
    "photo-left-1": { x: -41, y: 91, w: 195.54, h: 136.981, pd: 45 },
    "photo-left-2": { x: -48, y: 370, w: 223.519, h: 154.187, pd: 65 },
    "photo-left-3": { x: -90, y: 574, w: 223.267, h: 128.738, pd: 60 },
    "photo-right-1": { x: 270, y: 231, w: 173.765, h: 136.166, pd: 55 },
    "photo-right-2": { x: 281, y: 516, w: 177.692, h: 191.959, pd: 70 },
  },
} as const;

// sf: spreadFactor - 画面幅変化時の水平広がり係数
// pd: parallaxDepth - スクロール時に上方向へ動く量
export const shapes = [
  { id: "shape-gold-left-top",        baseX: -675, baseY: 104,  w: 212, h: 185, sf: 1.2, pd: 34 },
  { id: "shape-white-left",           baseX: -498, baseY: 352,  w: 237, h: 206, sf: 0.8, pd: 56 },
  { id: "shape-blue-right-top",       baseX:  319, baseY: 464,  w: 317, h: 249, sf: 1.0, pd: 76 },
  { id: "shape-purple-right-small",   baseX:  197, baseY: 134,  w: 243, h: 98,  sf: 0.9, pd: 28 },
  { id: "shape-green-center-top",     baseX: -160, baseY:  19,  w: 158, h: 192, sf: 0.2, pd: 18 },
  { id: "shape-blue-stroke-left",     baseX: -681, baseY: 591,  w: 303, h: 167, sf: 1.3, pd: 88 },
  { id: "shape-gold-left-lower",      baseX: -452, baseY: 859,  w: 213, h: 124, sf: 0.8, pd: 112 },
  { id: "shape-orange-stroke-right",  baseX:  394, baseY: 140,  w: 377, h: 207, sf: 1.3, pd: 46 },
  { id: "shape-gold-right",           baseX:  400, baseY: 730,  w: 257, h: 318, sf: 1.0, pd: 102 },
  { id: "shape-orange-stroke-center", baseX:   93, baseY: 1027, w: 206, h: 282, sf: 0.3, pd: 132 },
  { id: "shape-white-left-bottom",    baseX: -406, baseY: 1103, w: 220, h: 166, sf: 0.9, pd: 144 },
  { id: "shape-green-right-bottom",   baseX:  322, baseY: 1028, w: 265, h: 203, sf: 1.0, pd: 124 },
] as const;

export const photos = [
  { id: "photo-left-1",  baseX: -617, baseY: 297,  w: 371, h: 260, sf: 1.0, pd: 82 },
  { id: "photo-left-2",  baseX: -681, baseY: 706,  w: 424, h: 293, sf: 1.1, pd: 128 },
  { id: "photo-right-1", baseX:  276, baseY: 387,  w: 329, h: 258, sf: 1.0, pd: 96 },
  { id: "photo-right-2", baseX:  269, baseY: 846,  w: 337, h: 364, sf: 1.0, pd: 154 },
  { id: "photo-left-3",  baseX: -628, baseY: 1042, w: 423, h: 244, sf: 1.1, pd: 184 },
] as const;
