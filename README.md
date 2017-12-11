# :steam_locomotive: Lunch train

App to manage your workplace's lunch trains. Create a train with destination and
see who are interested.

## Requirements

* [Node](https://nodejs.org) v8.6.0
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com/) engine >= 1.13.0

## Preparation

**Firebase credentials**

Copy example file `/client/src/credentials.json.example` to
`/client/src/credentials.json`. Copy Firebase configurations from your
[Firebase Console](https://console.firebase.google.com) under firebase-property.

**Client, API server and database configuration**

Copy example file `/.env.example` to `/.env`. Change at least username and
password environment variables. This file is not included to Git for safety.

* **DATABASE_ROOT_USERNAME** Database root username. Change this!
* **DATABASE_ROOT_PASSWORD** Database root user's password. Change this!
* **DATABASE_PORT_OUT** If Docker compose is used, database port is mapped to
  this port at host machine.
* **DATABASE_NAME** Name of the database to create.
* **CLIENT_PORT** Port which client service uses.
* **CLIENT_PORT_OUT** If Docker compose is used, client port is mapped to this
  port at host machine.
* **SERVER_HOST** Host which server service uses to listen connections. If used
  inside Docker, prefer to use `0.0.0.0` as a localhost address.
* **SERVER_PORT** Port which server service uses.
* **SERVER_PORT_OUT** If Docker compose is used, server port is mapped to this
  port at host machine.
* **SERVER_SOCKET_PORT** Server Websocket port.
* **SERVER_SOCKET_PORT_OUT** Server Websocket port target port mapped in
  Docker-compose.
* **DATABASE_CONNECTION_HOST** Server services target host when connecting to
  database service. This changes, depending on Docker configuration. Use
  database service's service identifier as hostname if connecting with
  Docker-compose.
* **DATABASE_CONNECTION_PORT** Same as connection host, but with port. Depends
  on Docker configuration.

## Build with development configuration

* Run in project root command `yarn run docker-development`.
* Check in browser [http://localhost:80](http://localhost:80).

Speciality of local configuration is that there is no Docker image build. App
repositories are shared inside Docker images. This doesn't prevent live reload.

If there is need to build and run containers individually run commands per
service directory:

```
cd api-server
docker build -t api-server .
docker run -p 3100:3100 -d api-server
```

## Build with production configuration

* Run in project root command `yarn run docker-production`.
* Check in browser http://localhost:80. Or with other port which is
  **CLIENT_PORT_OUT** in environment variables.

## Development

Project is shared into own services build with docker. Every service has own
specific configurations.

### Git hooks

Git hooks are implemented with [husky](https://github.com/typicode/husky).
Prepush hooks should check linting and test status before push and prevent
action if there is an errors.

### Linting

Project services use [eslint](https://eslint.org/) for linting. It uses
[prettier](https://github.com/prettier/prettier)'s rule configuration.

### Database structure

MongoDB server is used as a database. Database has two collections: trains and
user joinings.

* **Trains** collection includes lunch place suggestions.
* **Joins** collection includes user joinings as a train ID and user ID pairs.

### Testing

Test are done with Jest. Unit tests are separated into services. End-to-end
tests are in client service. This is because interactions are triggered trough
UI components. In integration tests separated environment variables are used. To
set them copy `/.env.testing.example` to `/.env.testing`. Set variables as they
would seen from host machine.
