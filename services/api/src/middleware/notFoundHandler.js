import { NotFoundError } from '../errors/index.js';

/**
 * Catches unhandled routes and forwards a NotFoundError
 */
export const notFoundHandler = (req, _res, next) => {
  next(new NotFoundError(`Route ${req.method} ${req.originalUrl} not found`));
};
