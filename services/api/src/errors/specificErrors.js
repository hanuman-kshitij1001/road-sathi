import { AppError } from './AppError.js';
import { HTTP_STATUS, ERROR_CODES } from '../constants/index.js';

export class NotFoundError extends AppError {
  /**
   * @param {string} [message='Requested resource was not found']
   * @param {*} [details=null]
   */
  constructor(message = 'Requested resource was not found', details = null) {
    super(message, HTTP_STATUS.NOT_FOUND, ERROR_CODES.NOT_FOUND, details);
  }
}

export class ValidationError extends AppError {
  /**
   * @param {string} [message='Validation failed']
   * @param {*} [details=null]
   */
  constructor(message = 'Validation failed', details = null) {
    super(message, HTTP_STATUS.UNPROCESSABLE_ENTITY, ERROR_CODES.VALIDATION_ERROR, details);
  }
}

export class UnauthorizedError extends AppError {
  /**
   * @param {string} [message='Authentication required']
   * @param {*} [details=null]
   */
  constructor(message = 'Authentication required', details = null) {
    super(message, HTTP_STATUS.UNAUTHORIZED, ERROR_CODES.UNAUTHORIZED, details);
  }
}
