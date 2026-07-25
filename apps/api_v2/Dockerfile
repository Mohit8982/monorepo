# =====================
# Builder
# =====================
FROM node:22-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api_v2 ./apps/api_v2

RUN pnpm install --frozen-lockfile
RUN pnpm --filter @repo/api_v2 build


# =====================
# Runner
# =====================
FROM node:22-alpine AS runner

RUN corepack enable

WORKDIR /app

COPY apps/api_v2/package.json ./package.json
COPY pnpm-lock.yaml ./

RUN pnpm install --prod --ignore-scripts \
    && rm -rf /root/.local/share/pnpm \
    && rm -rf /root/.cache

COPY --from=builder /app/apps/api_v2/dist ./dist

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "dist/main.js"]