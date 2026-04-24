# Use Bun base image
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN bun run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["bun", "run", "src/index.ts"]
