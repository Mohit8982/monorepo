# ---------------- Base ----------------
FROM node:22 AS base
WORKDIR /app

RUN corepack enable

# Copy workspace config
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy full monorepo (important for shared package)
COPY . .

# Install dependencies (monorepo aware)
RUN pnpm install --frozen-lockfile

# ---------------- Build ----------------
FROM base AS builder

# Build ONLY dashboard using turbo
RUN pnpm turbo run build --filter=dashboard...

# ---------------- Runtime ----------------
FROM nginx:alpine

# Vite output folder
COPY apps/dashboard/dist /usr/share/nginx/html

# SPA routing fix
COPY apps/dashboard/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80