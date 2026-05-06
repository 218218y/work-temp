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

export const DEFAULT_WIDTH: number = WARDROBE_DEFAULTS.widthCm;
export const DEFAULT_HEIGHT: number = WARDROBE_DEFAULTS.heightCm;
export const DEFAULT_CHEST_DRAWERS_COUNT: number = WARDROBE_DEFAULTS.chestDrawersCount;

export const HINGED_DEFAULT_DEPTH: number = WARDROBE_DEFAULTS.byType.hinged.depthCm;
export const SLIDING_DEFAULT_DEPTH: number = WARDROBE_DEFAULTS.byType.sliding.depthCm;

export const DEFAULT_HINGED_DOORS: number = WARDROBE_DEFAULTS.byType.hinged.doorsCount;
export const DEFAULT_SLIDING_DOORS: number = WARDROBE_DEFAULTS.byType.sliding.doorsCount;

export const HINGED_DEFAULT_PER_DOOR_WIDTH: number = WARDROBE_DEFAULTS.byType.hinged.perDoorWidthCm;
export const SLIDING_DEFAULT_PER_DOOR_WIDTH: number = WARDROBE_DEFAULTS.byType.sliding.perDoorWidthCm;

export const DEFAULT_CORNER_WIDTH: number = WARDROBE_DEFAULTS.corner.widthCm;
export const DEFAULT_CORNER_DOORS: number = WARDROBE_DEFAULTS.corner.doorsCount;

export const DEFAULT_STACK_SPLIT_LOWER_HEIGHT: number = WARDROBE_DEFAULTS.stackSplit.lowerHeightCm;
export const STACK_SPLIT_SEAM_GAP_M: number = WARDROBE_DEFAULTS.stackSplit.seamGapM;

export const WARDROBE_WIDTH_MIN: number = WARDROBE_LIMITS.width.minCm;
export const WARDROBE_CHEST_WIDTH_MIN: number = WARDROBE_LIMITS.width.chestMinCm;
export const WARDROBE_WIDTH_MAX: number = WARDROBE_LIMITS.width.maxCm;

export const WARDROBE_HEIGHT_MIN: number = WARDROBE_LIMITS.height.minCm;
export const WARDROBE_CHEST_HEIGHT_MIN: number = WARDROBE_LIMITS.height.chestMinCm;
export const WARDROBE_HEIGHT_MAX: number = WARDROBE_LIMITS.height.maxCm;

export const WARDROBE_DEPTH_MIN: number = WARDROBE_LIMITS.depth.minCm;
export const WARDROBE_DEPTH_MAX: number = WARDROBE_LIMITS.depth.maxCm;

export const WARDROBE_DOORS_MIN: number = WARDROBE_LIMITS.doors.min;
export const WARDROBE_SLIDING_DOORS_MIN: number = WARDROBE_LIMITS.doors.slidingMin;
export const WARDROBE_DOORS_MAX: number = WARDROBE_LIMITS.doors.max;

export const WARDROBE_CHEST_DRAWERS_MIN: number = WARDROBE_LIMITS.chestDrawers.min;
export const WARDROBE_CHEST_DRAWERS_MAX: number = WARDROBE_LIMITS.chestDrawers.max;

export const WARDROBE_CELL_DIM_MIN: number = WARDROBE_DEPTH_MIN;

export const WARDROBE_CELL_WIDTH_MIN: number = WARDROBE_LIMITS.cell.widthMinCm;
export const WARDROBE_CELL_WIDTH_MAX: number = WARDROBE_LIMITS.cell.widthMaxCm;
export const WARDROBE_CELL_HEIGHT_MIN: number = WARDROBE_LIMITS.cell.heightMinCm;
export const WARDROBE_CELL_HEIGHT_MAX: number = WARDROBE_LIMITS.cell.heightMaxCm;
export const WARDROBE_CELL_DEPTH_MIN: number = WARDROBE_LIMITS.cell.depthMinCm;
export const WARDROBE_CELL_DEPTH_MAX: number = WARDROBE_LIMITS.cell.depthMaxCm;

export const STACK_SPLIT_LOWER_HEIGHT_MIN: number = WARDROBE_DEFAULTS.stackSplit.minLowerHeightCm;
export const STACK_SPLIT_MIN_TOP_HEIGHT: number = WARDROBE_DEFAULTS.stackSplit.minTopHeightCm;
export const STACK_SPLIT_LOWER_DEPTH_MIN: number = WARDROBE_LIMITS.stackSplit.lowerDepthMinCm;
export const STACK_SPLIT_LOWER_DEPTH_MAX: number = WARDROBE_LIMITS.stackSplit.lowerDepthMaxCm;
export const STACK_SPLIT_LOWER_WIDTH_MIN: number = WARDROBE_LIMITS.stackSplit.lowerWidthMinCm;
export const STACK_SPLIT_LOWER_WIDTH_MAX: number = WARDROBE_LIMITS.stackSplit.lowerWidthMaxCm;
export const STACK_SPLIT_LOWER_DOORS_MIN: number = WARDROBE_LIMITS.stackSplit.lowerDoorsMin;
export const STACK_SPLIT_LOWER_DOORS_MAX: number = WARDROBE_LIMITS.stackSplit.lowerDoorsMax;

export const CARCASS_BASE_DIMENSIONS = Object.freeze({
  plinth: Object.freeze({
    heightM: 0.08,
    widthClearanceM: 0.04,
    fallbackWidthClearanceM: 0.02,
    depthClearanceM: 0.05,
    frontInsetM: 0.015,
    minSegmentWidthM: 0.05,
    minSegmentDepthM: 0.05,
    segmentWidthEpsilonM: 0.001,
    steppedMinSegmentDepthM: 0.02,
    steppedBackInsetM: 0.01,
    connectorShapeInsetM: 0.04,
    connectorMaxToeRatio: 0.35,
    connectorToeEndTrimMaxM: 0.03,
    connectorWallInsetM: 0.01,
    connectorTinyEpsilonM: 0.0005,
  }),
  legs: Object.freeze({
    cornerInsetM: 0.05,
    centerSupportDoorsThreshold: 5,
    chestCenterSupportWidthThresholdM: 1.2,
    connectorInsetM: 0.06,
    connectorBackInsetM: 0.01,
    depthSteppedMinFrontBackGapM: 0.03,
  }),
  chest: Object.freeze({
    backThicknessM: 0.005,
    backInsetM: 0.005,
    drawerGapM: 0.004,
    drawerWidthClearanceM: 0.004,
    drawerFrontThicknessM: 0.018,
    drawerShadowLineThicknessM: 0.001,
    drawerBoxWidthClearanceM: 0.03,
    drawerBoxHeightClearanceM: 0.05,
    drawerBoxDepthClearanceM: 0.05,
    connectorDepthM: 0.02,
    connectorBackInsetM: 0.003,
    connectorWidthClearanceM: 0.08,
    connectorHeightClearanceM: 0.02,
    openOffsetZM: 0.35,
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


export const CORNER_WING_DIMENSIONS = Object.freeze({
  wing: Object.freeze({
    defaultWidthCm: WARDROBE_DEFAULTS.corner.widthCm,
    minBodyHeightM: 0.2,
    minDepthM: 0.2,
    blindClearanceM: 0.05,
    minGroupWidthM: 0.001,
    minActiveWidthM: 0.01,
  }),
  connector: Object.freeze({
    defaultWallLengthM: 1.03,
    minWallLengthM: 0.2,
    minFrontLengthM: 0.15,
    frontDoorGapM: 0.006,
    splitGapM: 0.006,
    doorMinWidthM: 0.05,
    doorMinHeightM: 0.25,
    doorBottomOffsetM: 0.002,
    doorTopClearanceM: 0.002,
    doorOutsetM: 0.001,
    splitGridDivisions: 6,
    splitGridLineIndex: 4,
    bottomStorageHeightM: 0.5,
    bottomLineMinGapM: 0.08,
    bottomLineTopGapM: 0.12,
    splitCutMinGapM: 0.08,
    splitCutToleranceMinM: 0.004,
    splitCutToleranceMaxM: 0.02,
    splitCutToleranceRatio: 0.01,
    minSegmentHeightM: 0.12,
    visualMinWidthM: 0.03,
    visualMinHeightM: 0.2,
    visualWidthClearanceM: 0.004,
    visualHeightClearanceM: 0.004,
    frontThicknessM: MATERIAL_DIMENSIONS.wood.thicknessM,
    frontTrimZOffsetM: 0.011,
    hitboxThicknessM: MATERIAL_DIMENSIONS.wood.thicknessM,
    edgeHandleShortInsetM: 0.1,
    edgeHandleLongInsetM: 0.2,
    edgeHandleLongLiftM: 0.1,
    edgeHandleLiftDrawerCountThreshold: 4,
    edgeHandleDefaultAbsY: 1.05,
    edgeHandleLiftDoorBottomThresholdM: 0.9,
    edgeHandleLiftExtraM: 0.15,
  }),
  cells: Object.freeze({
    doorsPerCell: 2,
    defaultGridDivisions: 6,
    splitGridLineIndex: 4,
    minWidthM: 0.05,
    minDoorUnitWidthM: 0.2,
    widthAdjustmentEpsilonM: 1e-6,
    minAbsDepthCm: 20,
    minAbsDepthWoodMultiplier: 4,
    minBodyWoodMultiplier: 2,
  }),
  drawers: Object.freeze({
    shoeHeightM: DRAWER_DIMENSIONS.external.shoeHeightM,
    externalRegularHeightM: DRAWER_DIMENSIONS.external.regularHeightM,
    internalDefaultDepthM: DRAWER_DIMENSIONS.internal.defaultDepthM,
    internalMaxSingleDrawerHeightM: DRAWER_DIMENSIONS.internal.maxSingleDrawerHeightM,
    internalVerticalInsetM: DRAWER_DIMENSIONS.internal.verticalInsetM,
    internalMinHeightM: DRAWER_DIMENSIONS.internal.minDrawerHeightM,
    internalFirstBottomGapM: DRAWER_DIMENSIONS.internal.firstDrawerBottomGapM,
    internalBetweenGapM: DRAWER_DIMENSIONS.internal.betweenDrawersGapM,
    rodMinLengthM: 0.05,
    rodWidthClearanceM: 0.02,
    hangingClothesWidthClearanceM: 0.06,
    internalMinWidthM: 0.1,
    internalWidthClearanceM: 0.1,
    internalMinDepthM: 0.08,
    internalDepthClearanceM: 0.12,
    internalClosedBackOffsetM: 0.02,
    internalOpenBackOffsetM: 0.3,
    internalStackCount: DRAWER_DIMENSIONS.internal.stackCount,
    shelfOverDrawerMinDepthM: 0.05,
    shelfOverDrawerDepthClearanceM: 0.002,
    externalFrontOffsetZM: DRAWER_DIMENSIONS.external.frontOffsetZM,
    externalOpenOffsetZM: DRAWER_DIMENSIONS.external.openOffsetZM,
    externalVisualWidthClearanceM: DRAWER_DIMENSIONS.external.visualWidthClearanceM,
    externalBoxWidthClearanceM: DRAWER_DIMENSIONS.external.boxWidthClearanceM,
    externalBoxHeightClearanceM: DRAWER_DIMENSIONS.external.boxHeightClearanceM,
    externalBoxDepthBackClearanceM: DRAWER_DIMENSIONS.external.boxDepthBackClearanceM,
    externalBoxOffsetZM: DRAWER_DIMENSIONS.external.boxOffsetZM,
    drawerShadowWidthClearanceM: 0.01,
    drawerShadowHeightM: 0.008,
    drawerShadowDepthM: 0.01,
    drawerShadowFrontOffsetM: 0.005,
  }),
  baseLegs: Object.freeze({
    minCount: 2,
    spacingM: 0.6,
    widthClearanceM: 0.1,
    insetM: CARCASS_BASE_DIMENSIONS.legs.cornerInsetM,
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

export function getDefaultDepthForWardrobeType(value: unknown): number {
  return resolveWardrobeTypeDefaults(value).depthCm;
}

export function getDefaultDoorsForWardrobeType(value: unknown): number {
  return resolveWardrobeTypeDefaults(value).doorsCount;
}

export function getDefaultPerDoorWidthForWardrobeType(value: unknown): number {
  return resolveWardrobeTypeDefaults(value).perDoorWidthCm;
}

export function getDefaultWidthForWardrobeType(value: unknown): number {
  const defaults = resolveWardrobeTypeDefaults(value);
  return defaults.doorsCount * defaults.perDoorWidthCm;
}

export function getDefaultHeightForWardrobeType(value: unknown): number {
  return resolveWardrobeTypeDefaults(value).heightCm;
}

export function getDefaultChestDrawersCount(): number {
  return WARDROBE_DEFAULTS.chestDrawersCount;
}

export function resolveDefaultWardrobeDimensions(value: unknown): {
  widthCm: number;
  heightCm: number;
  depthCm: number;
  doorsCount: number;
  perDoorWidthCm: number;
} {
  return resolveWardrobeTypeDefaults(value);
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
