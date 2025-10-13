# Backend Utilities Library

A lightweight Node.js library to simplify common backend tasks like logging, API responses, and error handling.

## Features

- Standardized API responses
- Structured logging with optional correlation IDs
- Error handling helpers
- TypeScript-ready
- Framework-agnostic (works with Express, Fastify, NestJS, etc.)

---

## Tasks / TODO

### 1. Project Setup
- [x] Initialize npm package (`npm init`)
- [x] Setup TypeScript (`tsconfig.json`)
- [x] Setup ESLint & Prettier for code formatting
- [x] Create folder structure (`src`, `tests`, `dist`)

### 2. Standardized API Responses
- [x] Create function to wrap responses: `{ success: boolean, data: any, error?: string }`
- [ ] Include optional pagination info
- [ ] Type definitions for TypeScript

### 3. Logging Utility
- [ ] Create wrapper around `winston` or `pino`
- [ ] Add support for correlation IDs per request
- [ ] Include different log levels (`info`, `warn`, `error`, `debug`)
- [ ] Environment-based logging (dev vs production)

### 4. Error Handling Helpers
- [ ] Function to format errors into consistent objects
- [ ] Optional stack trace logging in development
- [ ] Integration with API response wrapper

### 5. Documentation
- [ ] Write usage examples
- [ ] Add TypeScript types in README examples
- [ ] Provide sample integration with Express

### 6. Testing
- [ ] Setup Jest or Vitest
- [ ] Write tests for API response wrapper
- [ ] Write tests for logging utility
- [ ] Write tests for error handling helpers

### 7. Publishing
- [ ] Configure npm scripts for build and publish
- [ ] Test publishing to npm (`npm publish --dry-run`)
- [ ] Add badges (build, npm version) to README

---
