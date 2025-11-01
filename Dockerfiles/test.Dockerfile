FROM node:20.12-alpine

WORKDIR /testapp

COPY package.json package-lock.json ./

RUN npm install

COPY ./ ./

CMD [ "npm", "test" ]