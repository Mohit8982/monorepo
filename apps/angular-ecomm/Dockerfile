# ---------------- Base ----------------
FROM node:22-alpine AS base

WORKDIR /app

RUN corepack enable

# Copy workspace config
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy full monorepo (important for shared package)
COPY . .

# Install dependencies (monorepo aware)
RUN cat pnpm-workspace.yaml

RUN pnpm install --frozen-lockfile


# ---------------- Build ----------------
FROM base AS builder

# Build ONLY angular-ecomm using turbo
RUN pnpm turbo run build --filter=angular-ecomm...


# ---------------- Runtime ----------------
FROM nginx:alpine

# Angular output folder
COPY --from=builder /app/apps/angular-ecomm/dist/angular-ecomm/browser /usr/share/nginx/html

# SPA routing fix
COPY --from=builder /app/apps/angular-ecomm/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80