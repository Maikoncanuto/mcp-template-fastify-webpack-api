FROM node:18-alpine AS build

ENV NODE_ENV production

RUN npm i -g npm
WORKDIR /
COPY . .
RUN npm ci -y --omit=dev --only=production 
RUN npm run build:prd
RUN rm -rf node_modules

FROM node:18-alpine

ENV NODE_ENV production
RUN apk add dumb-init
WORKDIR /
COPY --chown=node:node --from=build ./dist/backend.bundle.js ./backend.bundle.js
EXPOSE 3000
USER node

CMD [ "dumb-init", "node", "./backend.bundle.js"]