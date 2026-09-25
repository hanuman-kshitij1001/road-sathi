import { ApiResponse } from '../utils/apiResponse.js';
import { config } from '../config/index.js';

export const getHealth = (_req, res) => {
  return ApiResponse.success(res, {
    message: 'Road-Sathi AI Service is operational',
    data: {
      status: 'healthy',
      service: 'ai',
      environment: config.env,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: '0.1.0',
    },
  });
};
