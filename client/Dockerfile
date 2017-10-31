FROM node:8-alpine
WORKDIR /app
EXPOSE 3000
ADD . .
RUN yarn && yarn build
CMD yarn start
