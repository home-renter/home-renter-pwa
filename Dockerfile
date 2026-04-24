# Use Node.js 20-alpine as base image
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory to root of monorepo
WORKDIR /app

# Copy root package files first (for workspace resolution)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all apps and packages
COPY apps ./apps
COPY packages ./packages

# Install all dependencies (including workspace packages)
# Removed --frozen-lockfile to allow lockfile updates if needed
RUN pnpm install

# Navigate to API folder and build
WORKDIR /app/apps/api

# Build the API
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the app (uses the 'start' script in package.json)
CMD ["pnpm", "run", "start"]
