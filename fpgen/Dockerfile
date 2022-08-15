FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY /dist/ffgen /usr/share/nginx/hmtl
