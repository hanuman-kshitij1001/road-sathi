import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/index.js';
import { requestLogger, notFoundHandler, errorHandler } from './middleware/index.js';
import { apiRoutes } from './routes/index.js';
import { getHealth } from './controllers/health.controller.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors(config.cors));

// Request body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use(requestLogger);

// Top-level direct health check (standard for container orchestrators & probes)
app.get('/health', getHealth);

// Versioned API routes
app.use(config.apiPrefix, apiRoutes);

// Fallthrough 404 handler
app.use(notFoundHandler);

// Centralized error handling
app.use(errorHandler);

export default app;
