FROM alpine:3.11 as builder
RUN apk --no-cache add gcc g++ make python nodejs npm

WORKDIR /fm-rock-paper-scissors-game
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
RUN npm ci
COPY . .
RUN npm run build && rm -rf node_modules && npm ci --production

FROM alpine:3.11
RUN apk --no-cache add nodejs
WORKDIR /fm-rock-paper-scissors-game
RUN mkdir /fm-rock-paper-scissors-game/dist
COPY --from=builder /fm-rock-paper-scissors-game/node_modules ./node_modules
COPY --from=builder /fm-rock-paper-scissors-game/dist ./dist
COPY --from=builder /fm-rock-paper-scissors-game/server.js .

CMD ["node", "server"]
