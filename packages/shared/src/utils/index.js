/**
 * Road-Sathi Shared Helper Utilities
 */

/**
 * Safely parses JSON with fallback value.
 * @param {string} jsonString
 * @param {*} fallback
 * @returns {*}
 */
export const safeJsonParse = (jsonString, fallback = null) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
};

/**
 * Formats a Date object or ISO string to ISO string timestamp.
 * @param {Date|string|number} [date=new Date()]
 * @returns {string}
 */
export const toIsoTimestamp = (date = new Date()) => {
  return new Date(date).toISOString();
};

/**
 * Checks if a value is non-empty object.
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

/**
 * Sanitizes an object by removing undefined or null properties.
 * @param {Record<string, *>} obj
 * @returns {Record<string, *>}
 */
export const sanitizeObject = (obj) => {
  if (!isObject(obj)) return {};
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null) {
      acc[key] = val;
    }
    return acc;
  }, {});
};
