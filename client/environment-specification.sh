#!/bin/sh

# Set environment default if variable is not set.
CLIENT_ENV="${ENVIRONMENT:-development}"

echo "environment-specification.sh: Run service in ' ${CLIENT_ENV} ' environment.";

if [ $CLIENT_ENV = "development" ]
then
  yarn
  yarn run start-development
fi

if [ $CLIENT_ENV = "production" ]
then
  yarn
  yarn build
  yarn run start-production
fi
