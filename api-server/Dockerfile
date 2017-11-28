FROM node:8-alpine
WORKDIR /app
EXPOSE 3100
EXPOSE 8100
COPY package.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
