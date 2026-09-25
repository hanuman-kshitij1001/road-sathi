export const ROUTES = Object.freeze({
  HOME: '/',
  DISPATCH_REQUESTS: '/requests',
  EARNINGS: '/earnings',
  PROFILE: '/profile',
});

export const APP_CONFIG = Object.freeze({
  NAME: 'Road-Sathi Partner',
  TAGLINE: 'Mechanic & Service Partner Portal',
  DEFAULT_API_URL: import.meta.env.VITE_PROVIDER_API_BASE_URL || 'http://localhost:5000/api/v1',
});
