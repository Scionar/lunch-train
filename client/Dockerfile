FROM node:8-alpine
WORKDIR /app
EXPOSE 3000
ENV NODE_ENV development
ENV CLIENT_PORT 3000
ADD . .
RUN ["chmod", "+x", "./environment-specification.sh"]
RUN ["./environment-specification.sh"]
CMD yarn start
