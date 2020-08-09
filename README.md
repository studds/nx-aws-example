# NxAwsExample

This is a sample project for https://github.com/studds/nx-aws, powered by https://nx.dev

## Example app

This repo currently provides a single simple example app, with front and backends. The frontend uses angular. The backend using AWS SAM, and is built using nx-aws.

## Development server

Frontend: `ng serve simple`
Backend: `ng serve api`

## Build

Run `ng build simple` and `ng build api` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Package and deploy

The backend needs separate package and deploy steps. Both package and deploy require the
[AWS SAM CLI to be installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
You'll also need to have AWS permissions configured, and to configure an S3 bucket where deploy artefacts can be
stored - in these examples, `my-build-artefacts`.

`ng run api:package --s3Bucket my-build-artefacts`

`ng run api:deploy --s3Bucket my-build-artefacts`

The first time you deploy the backend stack will take a while, as it deploys a CloudFront distribution.
You can then deploy the frontend app. The frontend app refers to the backend api in `angular.json` to derive the deploy bucket.

`ng run simple:deploy`

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
