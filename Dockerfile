FROM node:18.12.1-alpine3.17 AS build

WORKDIR /home/node/app

COPY . .

RUN yarn install

FROM node:18.12.1-alpine3.17
COPY --from=build --chown=node /home/node/app /home/node/app

WORKDIR /home/node/app

USER node

EXPOSE 3000

CMD ["yarn", "dev"]
