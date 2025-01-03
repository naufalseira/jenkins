# Build stage
FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Development stage
FROM node:22-alpine AS development

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

EXPOSE 8080

CMD [ "node", "server.js" ]