# Dockerfile for a Next.js application
# This Dockerfile uses multi-stage builds to optimize the final image size.
### STAGE 1: Build ###
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM node:18-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

# Only copy the output + required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
