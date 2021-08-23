FROM node:14 AS builder

WORKDIR /opt/web

COPY . ./

RUN yarn
RUN yarn build

FROM nginx:1.18-alpine
COPY --from=builder /opt/web/build /usr/share/nginx/html