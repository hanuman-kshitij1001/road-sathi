export const ROUTES = Object.freeze({
  HOME: '/',
  OPERATIONS: '/operations',
  PROVIDERS: '/providers',
  USERS: '/users',
  AUDIT_LOGS: '/audit-logs',
  SETTINGS: '/settings',
});

export const APP_CONFIG = Object.freeze({
  NAME: 'Road-Sathi Admin',
  TAGLINE: 'Operations & Platform Management',
  DEFAULT_API_URL: import.meta.env.VITE_ADMIN_API_BASE_URL || 'http://localhost:5000/api/v1',
});
