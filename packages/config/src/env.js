/**
 * Helper to validate and extract environment variables safely
 */

/**
 * Gets an environment variable or returns default value
 * @param {string} key
 * @param {string} [defaultValue='']
 * @returns {string}
 */
export const getEnv = (key, defaultValue = '') => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
};

/**
 * Gets an environment variable converted to an integer
 * @param {string} key
 * @param {number} defaultValue
 * @returns {number}
 */
export const getEnvNumber = (key, defaultValue) => {
  const val = getEnv(key);
  if (!val) return defaultValue;
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

/**
 * Checks if current environment is production
 * @returns {boolean}
 */
export const isProduction = () => {
  return getEnv('NODE_ENV') === 'production';
};

/**
 * Checks if current environment is development
 * @returns {boolean}
 */
export const isDevelopment = () => {
  return getEnv('NODE_ENV', 'development') === 'development';
};
