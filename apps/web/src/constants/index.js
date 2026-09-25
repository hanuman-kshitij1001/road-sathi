export * from './routes.js';

export const APP_CONFIG = Object.freeze({
  NAME: 'Road-Sathi',
  TAGLINE: 'On-Demand Roadside Emergency Assistance',
  DEFAULT_API_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
});
