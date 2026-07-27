# ---------- Base ----------
FROM node:22-alpine AS base

RUN corepack enable

# ---------- Builder ----------
FROM base AS builder

WORKDIR /app

RUN npm install -g turbo

COPY . .

RUN turbo prune @repo/api_v2 --docker

# ---------- Installer ----------
FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .

RUN pnpm turbo run build --filter=@repo/api_v2

# ---------- Runner ----------
FROM base AS runner

WORKDIR /app

RUN addgroup -S nodejs && adduser -S nest -G nodejs

COPY --from=installer --chown=nest:nodejs /app .

USER nest

WORKDIR /app/apps/api_v2

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/main.js"]