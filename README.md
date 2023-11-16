## POC: Site Builder Core

A POC for proving the implementation of Site Builder Core using NestJS.

### Which Tech Stack In Use

- Framework: NestJS/Express
- Language: TypeScript
- Database ORM: `TypeORM/mssql`
- Testing: `Jest`
- Package Manager: PNPM (which is fastest)
- Containerize: Docker
- Linting: `Prettier`, `ESLint`, `Husky`, `commitlint``
- Validation: `class-validator`, `class-transformer`
- API Doc: `@nestjs/swagger`
- Logging: `pino-logger`

### Library: `@app/common`

The common library has already included:

- Database
  - `AbstractEntity`
  - `AbstractRepository`
- Interceptors
  - Global Response transformation
- Logger
  - Pino-logger with auto-generated requestId
- Health check module
- Filters
  - Global exception filter

### Example

[Link](https://github.com/prd-tan-truong/ts-nestjs-poc-site-builder-core/tree/example/site-service)

### How to start development

```
pnpm run start:dev
```

### Application structure

```
.
├── apps
│   ├── sites                               # Site service
│   │   ├── src
│   │   │   ├── auth
│   │   │   │   ├── auth.strategy.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.guard.ts
│   │   │   ├── main.ts
│   │   │   ├── sites.controller.ts
│   │   │   ├── sites.module.ts
│   │   │   ├── sites.service.ts
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── tsconfig.app.json
├── e2e                                     # Contains end-to-end test suites
│   ├── specs
│   ├── docker-compose.yaml
│   ├── Dockerfile
│   ├── package.json
│   ├── pnpm-lock.yaml
├── libs
│   ├── common                              # Contains shared modules
│   │   ├── src
│   │   │   ├── constants
│   │   │   ├── config
│   │   │   ├── database
│   │   │   ├── dto
│   │   │   ├── filters
│   │   │   ├── health
│   │   │   ├── interceptors
│   │   │   ├── logger
│   │   │   ├── index.ts
```
