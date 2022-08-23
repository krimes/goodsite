# этап сборки (build stage)
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
VOLUME [ "/app/src", "/app/public" ]
EXPOSE 5000
CMD npm run dev -- --host
