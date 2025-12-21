# Dockerfile Best Practices

This document provides best practices for writing clean, efficient, and secure Dockerfiles.

## 1. Keep Images Small

- **Use a minimal base image**: Start with a small base image, like `alpine` or `slim` variants of official images (e.g., `python:3.10-slim`).
- **Use multi-stage builds**: Use multi-stage builds to separate the build environment from the runtime environment. This allows you to include build tools and dependencies in the build stage without them ending up in the final image.
- **Clean up unnecessary files**: In the same `RUN` step where you install packages, remove cache files and other temporary files (e.g., `rm -rf /var/lib/apt/lists/*` for Debian-based images).

## 2. Optimize for Caching

- **Order instructions logically**: Place instructions that change less frequently (like installing dependencies) before instructions that change more frequently (like copying source code). This allows Docker to reuse cached layers more effectively.
- **Copy `package.json` first**: For Node.js applications, copy the `package.json` and `package-lock.json` files and install dependencies before copying the rest of the source code.

## 3. Security

- **Run as a non-root user**: Avoid running your application as the `root` user inside the container. Create a dedicated user and group, and use the `USER` instruction to switch to that user.
- **Don't leak secrets**: Never hardcode secrets (e.g., API keys, passwords) in your Dockerfile. Use build-time arguments, environment variables, or a secrets management tool to pass secrets to the container at runtime.
- **Use a `.dockerignore` file**: Use a `.dockerignore` file to exclude files and directories that are not needed in the image, such as `.git`, `node_modules`, and local development files.

## 4. Example: Node.js Dockerfile

Here is an example of a well-structured Dockerfile for a Node.js application using a multi-stage build:

```dockerfile
# ---- Build Stage ----
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application (if necessary)
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine
WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy built assets and dependencies from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
```
