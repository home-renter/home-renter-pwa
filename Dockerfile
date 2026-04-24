# Use Node.js base image (pnpm is installed via npm)
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
RUN pnpm install 
#--frozen-lockfile

# Navigate to API folder and build
WORKDIR /app/apps/api

# Build the API
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "run", "start"]
