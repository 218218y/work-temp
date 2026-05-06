// Canonical wardrobe/product dimension tokens.
//
// This shared module is intentionally dependency-free so runtime, features, UI,
// builder, kernel, and exports can all read the same dimensional policy without
// creating layer back-edges. Keep product measurements here; leave pixels,
// timings, material roughness/metalness, and render-order numbers out.

export type WardrobeDimensionDefaultType = 'hinged' | 'sliding';

export const CM_PER_METER = 100;

export function cmToM(valueCm: number): number {
  return valueCm / CM_PER_METER;
}

export function mToCm(valueM: number): number {
  return valueM * CM_PER_METER;
}

export function clampDimension(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function finiteOr(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export const WARDROBE_DEFAULTS = Object.freeze({
  widthCm: 160,
  heightCm: 240,
  chestDrawersCount: 4,
  byType: Object.freeze({
    hinged: Object.freeze({
      depthCm: 55,
      doorsCount: 4,
      perDoorWidthCm: 40,
    }),
    sliding: Object.freeze({
      depthCm: 60,
      doorsCount: 2,
      perDoorWidthCm: 80,
    }),
  }),
  corner: Object.freeze({
    widthCm: 120,
    doorsCount: 3,
  }),
  stackSplit: Object.freeze({
    lowerHeightCm: 60,
    minTopHeightCm: 40,
    minLowerHeightCm: 20,
    seamGapM: 0.002,
    lowerWidthFallbackCm: 50,
  }),
});

export const WARDROBE_LIMITS = Object.freeze({
  width: Object.freeze({ minCm: 40, chestMinCm: 20, maxCm: 560 }),
  height: Object.freeze({ minCm: 100, chestMinCm: 20, maxCm: 300 }),
  depth: Object.freeze({ minCm: 20, maxCm: 150 }),
  doors: Object.freeze({ min: 0, slidingMin: 2, max: 14 }),
  chestDrawers: Object.freeze({ min: 2, max: 8 }),
  cell: Object.freeze({
    widthMinCm: 40,
    widthMaxCm: 560,
    heightMinCm: 100,
    heightMaxCm: 300,
    depthMinCm: 20,
    depthMaxCm: 150,
  }),
  stackSplit: Object.freeze({
    lowerDepthMinCm: 20,
    lowerDepthMaxCm: 150,
    lowerWidthMinCm: 30,
    lowerWidthMaxCm: 800,
    lowerDoorsMin: 0,
    lowerDoorsMax: 20,
  }),
});

export const MATERIAL_DIMENSIONS = Object.freeze({
  wood: Object.freeze({
    thicknessM: 0.018,
  }),
  glassShelf: Object.freeze({
    thicknessM: 0.018,
  }),
});

export const BASE_LEG_DIMENSIONS = Object.freeze({
  defaults: Object.freeze({
    style: 'tapered',
    color: 'black',
    heightCm: 12,
    widthCm: 3.5,
    taperedWidthCm: 4,
  }),
  limits: Object.freeze({
    heightMinCm: 1,
    heightMaxCm: 60,
    widthMinCm: 1,
    widthMaxCm: 30,
  }),
});

export const DOOR_TRIM_DIMENSIONS = Object.freeze({
  defaults: Object.freeze({
    thicknessM: 0.035,
    depthM: 0.01,
    centerNorm: 0.5,
    crossSizeCm: 3.5,
  }),
  limits: Object.freeze({
    minSpanM: 0.04,
    customMinCm: 4,
    customMaxCm: 400,
    crossSizeMinCm: 1,
    crossSizeMaxCm: 120,
  }),
  snap: Object.freeze({
    centerNormThreshold: 0.04,
    mirrorZoneM: 0.006,
    mirrorEdgeGapM: 0.0008,
  }),
});

export const DRAWER_DIMENSIONS = Object.freeze({
  sketch: Object.freeze({
    heightMinCm: 5,
    heightMaxCm: 120,
    externalDefaultHeightCm: 22,
    internalDefaultHeightCm: 16.5,
    externalCountMin: 1,
    externalCountMax: 5,
    minRenderHeightM: 0.01,
    internalGapM: 0.03,
    internalStackCount: 2,
  }),
  external: Object.freeze({
    shoeHeightM: 0.2,
    regularHeightM: 0.22,
    frontOffsetZM: 0.01,
    openOffsetZM: 0.35,
    visualWidthClearanceM: 0.004,
    visualThicknessM: 0.02,
    visualHeightClearanceM: 0.008,
    boxWidthClearanceM: 0.044,
    boxHeightClearanceM: 0.04,
    boxDepthBackClearanceM: 0.1,
    boxOffsetZM: 0.005,
    connectorDepthM: 0.03,
    connectorFrontZM: -0.01,
    connectorBackInsetM: 0.003,
    connectorWidthClearanceM: 0.09,
    connectorHeightClearanceM: 0.06,
  }),
  internal: Object.freeze({
    defaultGridStepM: 0.25,
    defaultDepthM: 0.5,
    defaultInnerWidthM: 0.6,
    maxSingleDrawerHeightM: 0.35,
    verticalInsetM: 0.02,
    minDrawerHeightM: 0.01,
    widthClearanceM: 0.03,
    depthClearanceM: 0.02,
    firstDrawerBottomGapM: 0.01,
    betweenDrawersGapM: 0.03,
    stackCount: 2,
    openOffsetZM: 0.25,
  }),
});

export const HANDLE_DIMENSIONS = Object.freeze({
  edge: Object.freeze({
    shortLengthM: 0.2,
    longLengthM: 0.4,
    minLengthM: 0.1,
    drawerWidthClearanceM: 0.04,
    doorAnchorOffsetM: 0.002,
    renderPrimitiveDoorAnchorInsetM: 0.0025,
    mountThicknessM: 0.0045,
    mountDepthM: 0.014,
    mountFrontZM: 0.006,
    returnThicknessM: 0.012,
    returnDepthM: 0.008,
    returnFrontZM: 0.022,
    returnInsetM: 0.0115,
    bridgeThicknessM: 0.007,
    bridgeOverlapM: 0.004,
    drawerReturnDropM: 0.0135,
  }),
  standard: Object.freeze({
    drawerWidthM: 0.16,
    drawerHeightM: 0.01,
    drawerDepthM: 0.02,
    doorWidthM: 0.01,
    doorHeightM: 0.16,
    doorDepthM: 0.02,
    doorOffsetM: 0.05,
    frontZM: 0.02,
  }),
});

export type ExternalDrawerGeometry = {
  zClosed: number;
  zOpen: number;
  visualW: number;
  visualT: number;
  visualH: number;
  boxW: number;
  boxH: number;
  boxD: number;
  boxOffsetZ: number;
  connectW: number;
  connectH: number;
  connectD: number;
  connectZ: number;
};

export function normalizeWardrobeDimensionDefaultType(value: unknown): WardrobeDimensionDefaultType {
  return value === 'sliding' ? 'sliding' : 'hinged';
}

export function resolveWardrobeTypeDefaults(value: unknown): {
  widthCm: number;
  heightCm: number;
  depthCm: number;
  doorsCount: number;
  perDoorWidthCm: number;
} {
  const type = normalizeWardrobeDimensionDefaultType(value);
  const byType = WARDROBE_DEFAULTS.byType[type];
  return {
    widthCm: WARDROBE_DEFAULTS.widthCm,
    heightCm: WARDROBE_DEFAULTS.heightCm,
    depthCm: byType.depthCm,
    doorsCount: byType.doorsCount,
    perDoorWidthCm: byType.perDoorWidthCm,
  };
}

export function resolveExternalDrawerGeometry(args?: {
  externalWidthM?: unknown;
  depthM?: unknown;
  woodThicknessM?: unknown;
  frontZM?: unknown;
  drawerHeightM?: unknown;
}): ExternalDrawerGeometry {
  const external = DRAWER_DIMENSIONS.external;
  const externalWidthM = finiteOr(args?.externalWidthM, 0);
  const depthM = finiteOr(args?.depthM, 0);
  const woodThicknessM = finiteOr(args?.woodThicknessM, MATERIAL_DIMENSIONS.wood.thicknessM);
  const frontZM = finiteOr(args?.frontZM, depthM / 2);
  const drawerHeightM = finiteOr(args?.drawerHeightM, external.regularHeightM);
  const connectD = external.connectorDepthM;

  return {
    zClosed: frontZM + external.frontOffsetZM,
    zOpen: frontZM + external.openOffsetZM,
    visualW: externalWidthM - external.visualWidthClearanceM,
    visualT: external.visualThicknessM,
    visualH: drawerHeightM - external.visualHeightClearanceM,
    boxW: externalWidthM - external.boxWidthClearanceM,
    boxH: drawerHeightM - external.boxHeightClearanceM,
    boxD: Math.max(woodThicknessM, depthM - external.boxDepthBackClearanceM),
    boxOffsetZ: -depthM / 2 + external.boxOffsetZM,
    connectW: externalWidthM - external.connectorWidthClearanceM,
    connectH: drawerHeightM - external.connectorHeightClearanceM,
    connectD,
    connectZ: external.connectorFrontZM - connectD / 2 - external.connectorBackInsetM,
  };
}
