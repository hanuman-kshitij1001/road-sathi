/**
 * Higher-order wrapper to handle asynchronous route handler errors cleanly
 * @param {Function} fn
 * @returns {import('express').RequestHandler}
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
