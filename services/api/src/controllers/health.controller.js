import { ApiResponse } from '../utils/apiResponse.js';
import { HTTP_STATUS } from '../constants/index.js';
import { config } from '../config/index.js';

/**
 * Controller to provide service health and diagnostic metadata
 */
export const getHealth = (_req, res) => {
  return ApiResponse.success(res, {
    message: 'Road-Sathi Core API is running smoothly',
    statusCode: HTTP_STATUS.OK,
    data: {
      status: 'healthy',
      service: 'api',
      environment: config.env,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '0.1.0',
    },
  });
};
