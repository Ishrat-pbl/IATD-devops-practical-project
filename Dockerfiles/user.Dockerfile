FROM node:20.12-alpine
 
ENV NODE_ENV=production
WORKDIR /userapp
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
CMD [ "npm", "start" ]