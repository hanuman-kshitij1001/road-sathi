import { logger } from '../utils/logger.js';
import { config } from '../config/index.js';

/**
 * Database Connection Lifecycle Abstraction
 * 
 * Prepares the connection lifecycle interface for future database drivers
 * (PostgreSQL / Prisma / MongoDB / Mongoose).
 */
export const database = {
  isConnected: false,

  async connect() {
    if (!config.database.url) {
      logger.info('Database URL not configured yet. Database connection skipped in foundation mode.');
      return;
    }
    // Future database connection initialization logic
    this.isConnected = true;
    logger.info('Database connected successfully');
  },

  async disconnect() {
    if (this.isConnected) {
      this.isConnected = false;
      logger.info('Database disconnected gracefully');
    }
  },
};
