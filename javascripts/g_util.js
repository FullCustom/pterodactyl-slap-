// util.js
/**
 * Returns a number constrained to the given range.
 *
 * @param {number} value The input value
 * @param {number} min The lower boundary
 * @param {number} max The upper boundary
 * @returns {number} A number in the range [min, max]
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}