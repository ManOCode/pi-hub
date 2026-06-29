# TypeScript Monorepo with Client-Side Web Application

This project is a basic TypeScript monorepo setup with a client-side rendering web application.

## Project Structure

```
ts-monorepo-webapp/
├── package.json
├── turbo.json
├── packages/
│   └── web-app/
│       ├── package.json
│       ├── tsconfig.json
│       ├── webpack.config.js
│       ├── public/
│       │   └── index.html
│       └── src/
│           ├── index.ts
│           └── styles.css
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Web App Features

The web application is a simple counter application that demonstrates:
- TypeScript compilation
- Client-side rendering
- Basic state management
- Event handling
- Webpack bundling

## Monorepo Benefits

This setup uses a monorepo structure which allows for:
- Shared code between packages
- Consistent tooling across projects
- Simplified dependency management
- Atomic commits across multiple packages