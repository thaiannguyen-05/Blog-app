FROM node:18-alpine as base

# Install dumb-init and pnpm
RUN apk add --no-cache dumb-init && \
    npm install -g pnpm

# dumb-init: Tool xử lý signal process đúng cách trong container
# pnpm: Package manager nhanh hơn npm, tiết kiệm disk space
# --no-cache: Không lưu cache sau khi cài, giảm size image

WORKDIR /app

# Copy package files for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile
# --frozen-lockfile: Cài đúng theo lock file, không update dependencies

# Copy source code
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build application
RUN pnpm run build

# Remove dev dependencies to reduce size
RUN pnpm prune --prod

# Production stage
FROM node:18-alpine AS production

RUN apk add --no-cache dumb-init

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copy production files from base stage
COPY --from=base --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=base --chown=nestjs:nodejs /app/dist ./dist
COPY --from=base --chown=nestjs:nodejs /app/package.json ./

# Create upload directory
RUN mkdir -p uploads && chown nestjs:nodejs uploads

USER nestjs

EXPOSE 4000

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/main.js"]