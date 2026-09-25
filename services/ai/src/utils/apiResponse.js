export class ApiResponse {
  static success(res, { data = null, message = 'Success', statusCode = 200 } = {}) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      error: null,
      meta: {
        timestamp: new Date().toISOString(),
        service: 'ai-service',
      },
    });
  }

  static error(res, { message = 'Internal Error', statusCode = 500, errorCode = 'AI_ERROR' } = {}) {
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
      error: { code: errorCode, message },
      meta: {
        timestamp: new Date().toISOString(),
        service: 'ai-service',
      },
    });
  }
}
