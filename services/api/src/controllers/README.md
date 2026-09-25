# Controllers Layer (`services/api/src/controllers`)

## Purpose
Controllers handle HTTP-specific interactions: extracting parameters, calling service methods, and sending structured HTTP responses.

## Guidelines
- Extract and sanitize `req.body`, `req.params`, `req.query`, `req.user`.
- Delegate business operations to the appropriate `Service`.
- Never access database queries or repositories directly from controllers.
- Use `ApiResponse.success` or `ApiResponse.error` for consistent client responses.
- Wrap asynchronous controller functions with `asyncHandler`.
