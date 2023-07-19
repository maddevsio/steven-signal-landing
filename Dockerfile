FROM node:18.12.1-alpine3.17 AS build

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:1.24.0-alpine
LABEL metaimagename=steven-signal-landing

COPY --from=build /app/out /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
