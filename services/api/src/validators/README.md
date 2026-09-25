# Validators Layer (`services/api/src/validators`)

## Purpose
This folder encapsulates request payload schema validators (e.g. using Zod, Joi, or express-validator).

## Guidelines
- Every HTTP route accepting request body, query parameters, or route parameters should have an associated validator schema.
- Middleware intercepts invalid payloads early before calling the controllers, returning structured 422 `ValidationError` responses.
