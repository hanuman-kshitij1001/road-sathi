import { ApiResponse } from '../utils/apiResponse.js';
import { HTTP_STATUS, ERROR_CODES } from '../constants/index.js';
import { logger } from '../utils/logger.js';
import { config } from '../config/index.js';

/**
 * Central Express error handling middleware
 */
export const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const errorCode = err.errorCode || ERROR_CODES.INTERNAL_ERROR;
  const message = err.isOperational ? err.message : 'An unexpected internal error occurred';
  const details = err.details || null;

  logger.error(`[${req.method}] ${req.originalUrl} - ${err.message}`, {
    statusCode,
    errorCode,
    stack: config.isDevelopment ? err.stack : undefined,
  });

  return ApiResponse.error(res, {
    message,
    statusCode,
    errorCode,
    details,
    meta: {
      path: req.originalUrl,
      method: req.method,
      stack: config.isDevelopment ? err.stack : undefined,
    },
  });
};
