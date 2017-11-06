# :steam_locomotive: Lunch train

App to manage your workplace's lunch trains. Create a train with destination and see who are interested.

## Requirements
* [Node](https://nodejs.org) v8.6.0
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com/) engine >= 1.13.0

## Build with local configuration
* Run in project root command `yarn run docker-local`.
* Check in browser [http://localhost:80](http://localhost:80).

Speciality of local configuration is that there is no Docker image build. App repositories are shared inside Docker images. This doesn't prevent live reload.

## Build with production configuration
* Run in project root command `yarn run docker-production`.
* Check in browser http://localhost:80.

## Development

Project is shared into own services build with docker. Every service has own specific configurations.

### Git hooks

Git hooks are implemented with [husky](https://github.com/typicode/husky). Precommit hooks should check linting status before commit and prevent action if there is errors.

### Linting

Project services use [eslint](https://eslint.org/) for linting. It uses [prettier](https://github.com/prettier/prettier)'s rule configuration.
