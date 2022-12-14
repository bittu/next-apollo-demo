FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /server

COPY package*.json ./
RUN npm install

FROM node:16-alpine AS builder
WORKDIR /server
COPY --from=deps /server/node_modules ./node_modules
COPY --from=deps /server/package*.json .
COPY . .

RUN npm run compile

FROM node:16-alpine AS runner
WORKDIR /server
ENV NODE_ENV production

COPY --from=builder /server/dist ./
COPY --from=builder /server/node_modules ./node_modules
COPY --from=builder /server/package*.json .

EXPOSE 5000

ENV PORT 5000

CMD ["node", "index.js"]