FROM node:20.0.0-alpine3.16
WORKDIR /usr/src/client/app

COPY package.json yarn.lock ./
RUN npm install -g npm@latest && npm install create-next-app

CMD "npm run dev"
