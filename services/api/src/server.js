import app from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';
import { database } from './database/connection.js';

let server;

const startServer = async () => {
  try {
    // Initialize database connectivity
    await database.connect();

    server = app.listen(config.port, () => {
      logger.info(`Road-Sathi Core API started successfully`);
      logger.info(`Listening on port: ${config.port} | Mode: ${config.env}`);
      logger.info(`Health check endpoint: http://localhost:${config.port}/health`);
      logger.info(`API Base URL: http://localhost:${config.port}${config.apiPrefix}`);
    });
  } catch (error) {
    logger.error('Failed to start API server:', error);
    process.exit(1);
  }
};

// Graceful shutdown handling
const gracefulShutdown = async (signal) => {
  logger.info(`${signal} received: closing HTTP server gracefully...`);

  if (server) {
    server.close(async () => {
      logger.info('HTTP server closed.');
      await database.disconnect();
      process.exit(0);
    });

    // Force close if server takes too long to shut down
    setTimeout(() => {
      logger.error('Forced shutdown due to timeout.');
      process.exit(1);
    }, 10000);
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Promise Rejection:', reason);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

startServer();
