FROM node:8-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3100
CMD ["yarn", "start"]
