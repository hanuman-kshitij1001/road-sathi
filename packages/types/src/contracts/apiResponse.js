/**
 * Standard API Response Contracts
 * 
 * JSDoc type contracts for uniform REST API response structures
 */

/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Indicates if request succeeded
 * @property {string} message - Human-readable summary message
 * @property {T|null} [data] - Response payload
 * @property {ApiErrorDetails|null} [error] - Error details if success is false
 * @property {ApiResponseMeta} meta - Request metadata (timestamp, requestId, etc.)
 */

/**
 * @typedef {Object} ApiErrorDetails
 * @property {string} code - Machine-readable error code (e.g., 'RESOURCE_NOT_FOUND')
 * @property {string} message - Descriptive error message
 * @property {Array<{field: string, message: string}>} [details] - Field-level validation issues
 */

/**
 * @typedef {Object} ApiResponseMeta
 * @property {string} timestamp - ISO timestamp of response generation
 * @property {string} [requestId] - Unique trace request ID
 * @property {string} [version] - API version
 */

export const createApiResponseShape = () => ({
  success: true,
  message: '',
  data: null,
  error: null,
  meta: {
    timestamp: new Date().toISOString(),
  },
});
