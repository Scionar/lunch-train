# :steam_locomotive: Lunch train

App to manage your workplace's lunch trains. Create a train with destination and
see who are interested.

## Requirements

* [Node](https://nodejs.org) v8.6.0
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com/) engine >= 1.13.0

## Preparation

**Firebase credentials**

Copy example file `./client/src/credentials.json.example` to
`./client/src/credentials.json`. Copy Firebase configurations from your
[Firebase Console](https://console.firebase.google.com) under firebase-property.

**Client, API server and database configuration**

Copy example file `./.env.example` to `./.env`. Change at least username and
password environment variables.

* **MONGO_INITDB_ROOT_USERNAME** Database root username. Change this!
* **MONGO_INITDB_ROOT_PASSWORD** Database root user's password. Change this!
* **CLIENT_PORT** Port which client service uses.
* **CLIENT_PORT_OUT** If Docker compose is used, client port is mapped to this
  port at host machine.

**API server configuration and credentials**

Copy example file `./api-server/.env.example` to `./api-server/.env`. No need to
change the configuration. By default authentication credentials are overwritten
by docker-compose configuration. This file is not included to Git for safety.

## Build with local configuration

* Run in project root command `yarn run docker-local`.
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
* Check in browser http://localhost:80.

## Development

Project is shared into own services build with docker. Every service has own
specific configurations.

### Git hooks

Git hooks are implemented with [husky](https://github.com/typicode/husky).
Precommit hooks should check linting status before commit and prevent action if
there is errors.

### Linting

Project services use [eslint](https://eslint.org/) for linting. It uses
[prettier](https://github.com/prettier/prettier)'s rule configuration.

## Database structure

MongoDB server is used as a database. Database has two collections: trains and
user joinings.

* **Trains** collection includes lunch place suggestions.

* **Joins** collection includes user joinings as a train ID and user ID pairs.
