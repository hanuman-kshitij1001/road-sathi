const formatMessage = (level, message) => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [AI-SERVICE] [${level.toUpperCase()}] ${message}`;
};

export const logger = {
  info: (msg) => console.log(formatMessage('info', msg)),
  warn: (msg) => console.warn(formatMessage('warn', msg)),
  error: (msg, err) => console.error(formatMessage('error', msg), err || ''),
};
