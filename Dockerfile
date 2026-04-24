# Use Bun base image
FROM oven/bun:1

# Set working directory to root of monorepo
WORKDIR /app

# Copy root package files first (for workspace resolution)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all apps and packages
COPY apps ./apps
COPY packages ./packages

# Install all dependencies (including workspace packages)
RUN bun install 

# Navigate to API folder and build
WORKDIR /app/apps/api

# Build the API
RUN bun run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["bun", "run", "src/index.ts"]
