import { HTTP_STATUS } from '../constants/index.js';

/**
 * Standardized JSON API response helper
 */
export class ApiResponse {
  /**
   * Send a successful JSON response
   * @param {import('express').Response} res
   * @param {Object} options
   * @param {*} [options.data=null]
   * @param {string} [options.message='Success']
   * @param {number} [options.statusCode=200]
   * @param {Object} [options.meta={}]
   */
  static success(res, { data = null, message = 'Success', statusCode = HTTP_STATUS.OK, meta = {} } = {}) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      error: null,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    });
  }

  /**
   * Send an error JSON response
   * @param {import('express').Response} res
   * @param {Object} options
   * @param {string} [options.message='An error occurred']
   * @param {number} [options.statusCode=500]
   * @param {string} [options.errorCode='INTERNAL_ERROR']
   * @param {*} [options.details=null]
   * @param {Object} [options.meta={}]
   */
  static error(res, {
    message = 'An error occurred',
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    errorCode = 'INTERNAL_ERROR',
    details = null,
    meta = {},
  } = {}) {
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
      error: {
        code: errorCode,
        message,
        details,
      },
      meta: {
        timestamp: new Date().toISOString(),
        ...meta,
      },
    });
  }
}
