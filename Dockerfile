FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

ARG APP_VERSION
ARG BUILD_DATE
ARG VCS_REF
ENV APP_VERSION=$APP_VERSION
ENV BUILD_DATE=$BUILD_DATE
ENV VCS_REF=$VCS_REF

COPY --from=builder /app/dist /usr/share/nginx/html
RUN printf '%s\n' "$BUILD_DATE" > /usr/share/nginx/html/.build-date

EXPOSE 80
