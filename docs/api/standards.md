# REST API Standards & Conventions

All endpoints in Road-Sathi follow unified standards:

## 1. Response Envelope

### Successful Response (`200 OK`, `201 Created`)
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... },
  "error": null,
  "meta": {
    "timestamp": "2026-09-25T21:00:00.000Z",
    "version": "0.1.0"
  }
}
```

### Error Response (`400`, `401`, `404`, `422`, `500`)
```json
{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "phone", "message": "Phone number must be valid" }
    ]
  },
  "meta": {
    "timestamp": "2026-09-25T21:00:00.000Z"
  }
}
```

## 2. HTTP Method Semantics
- `GET`: Read resource. Idempotent and safe.
- `POST`: Create resource or initiate action.
- `PUT`: Full update of an existing resource.
- `PATCH`: Partial update of an existing resource.
- `DELETE`: Remove resource.
