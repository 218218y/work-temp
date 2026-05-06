// Canonical wardrobe dimension defaults (centimeters).
//
// Runtime keeps this compatibility facade because many builder/kernel/UI callers
// already import these named constants. The actual dimensional policy lives in
// the shared token module so every layer can read the same values without a
// runtime -> features back-edge.

import {
  WARDROBE_DEFAULTS,
  WARDROBE_LIMITS,
  normalizeWardrobeDimensionDefaultType,
  resolveWardrobeTypeDefaults,
  type WardrobeDimensionDefaultType,
} from '../../shared/wardrobe_dimension_tokens_shared.js';

export type { WardrobeDimensionDefaultType };

export { normalizeWardrobeDimensionDefaultType };

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
