import app from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

const server = app.listen(config.port, () => {
  logger.info(`Road-Sathi AI Service listening on port ${config.port}`);
  logger.info(`Health check: http://localhost:${config.port}/health`);
});

const shutdown = (signal) => {
  logger.info(`${signal} received: shutting down AI Service`);
  server.close(() => {
    logger.info('AI service closed gracefully');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
