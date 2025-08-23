FROM node:22-alpine AS base

WORKDIR /usr/src/app

ENV TZ="IR"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package*.json ./
RUN npm i
RUN npm ci 

COPY . .
RUN npm run build

EXPOSE 4000

CMD [ "npm", "start" ]