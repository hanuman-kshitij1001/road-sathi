import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/index.js';
import { aiRoutes } from './routes/index.js';
import { getHealth } from './controllers/health.controller.js';
import { ApiResponse } from './utils/apiResponse.js';

const app = express();

app.use(helmet());
app.use(cors(config.cors));
app.use(express.json());

// Direct health check
app.get('/health', getHealth);

// AI router
app.use('/api/v1/ai', aiRoutes);

// Fallback 404
app.use((req, res) => {
  return ApiResponse.error(res, {
    message: `AI route ${req.method} ${req.originalUrl} not found`,
    statusCode: 404,
    errorCode: 'ROUTE_NOT_FOUND',
  });
});

// Error handler
app.use((err, _req, res, _next) => {
  return ApiResponse.error(res, {
    message: err.message || 'Internal AI service error',
    statusCode: 500,
  });
});

export default app;
