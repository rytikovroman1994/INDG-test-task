# E2E tests for project INDG

## Global Setting 

The tests are written in the TS language of the Webdriverio framework.
> Asynchronous version, since synchronous is not supported in the latest versions.

Required settings:
- NODEJS from v12.22.7 to v14:latest(To run tests locally)
- NPM from 6.14.15(To run tests locally)
- Docker latest version(To run tests in containers)
- Account in the browserstack(To run tests in browserstack)

## Project Installation

1. git clone https://github.com/rytikovroman1994/INDG-test-task.git
2. npm i

## ENV file
ENV file contains global variables for running tests
> Can be supplemented with any variables

- MODE - Test environment selection variable
- BASE_URL - The host on which the tests are run
- BROWSERSTACK_USERNAME - Username in the browser stack system
- BROWSERSTACK_ACCESS_KEY - AccessKey in the browser stack system

## Different test run environments
To switch the test environment, you need to change the variables in .env

### Develop
To run the tests, the main configuration file wdio.main.conf.ts and the additional wdio.develop.conf.ts

In .env file
- MODE=develop
- BASE_URL={your host}

Result - the tests will run in the local browser

### Browserstack 
To run the tests, the main configuration file wdio.main.conf.ts and the additional wdio.browserstack.conf.ts

In .env file
- MODE=browserstack
- BASE_URL={your host}
- BROWSERSTACK_USERNAME={your username}
- BROWSERSTACK_ACCESS_KEY={your access key}

Result - the tests will run in the system BrowserStack

### Docker 
To run the tests, the main configuration file wdio.main.conf.ts and the additional wdio.docker.conf.ts

> Docker allows you to build your environment to run tests. By analogy with the browserstack. In this project, the Solenoid is used as a hub. Unlike the browserstack is free. It is possible to scale to any size.

##### Preparation

1. There must be a Docker on your machine
2. You need to install docker images
3. docker pull aerokube/selenoid
4. docker pull aerokube/selenoid-ui
5. docker pull selenoid/chrome
6. docker pull selenoid/firefox

##### About the necessary files to run tests in docker

- browsers.json - Stores data about the brother
- docker-compose.yaml - Launch file multiple containers
- Dockerfile - File for building a container with tests

##### Config Setting

In .env file
- MODE=browserstack
- BASE_URL={your host}

In wdio.docker.conf.ts
- Replace the data in the hostname key with your host data(Default - localhost)

In docker-compose.yaml 
- Change the host data in the "command" line in the "selenoid-ui" service(Default - localhost)

##### Build the environment and run tests in docker

In the console, you need to run the command
> docker-compose up --build

Result:
1. Updated images to the latest
2. The Selenoid container rises on the specified host and port 4444
3. The Solenoid-Ui container rises on the specified host and port 8083(Variable parameter)
4. The container rises with tests and all tests are run(The progress can be viewed in Selenoid-Ui)
5. The test results are saved in the report

## Test structure

- Folder config-files - Stores all configuration files
- Folder helpers - Stores all universal functions
- Folder page-object - Selector Storage
- Folder specs - Stores all tests
- Folder typed - TS Import Settings

## Running tests

> npm run test - Running all tests
> npm run test -- --spec ./test/specs/example.e2e.ts - Running a single test
> npm run test -- --suite pageLogin - Running a test suite

## Running report 
Don't forget to install command line - npm i allure-commandline

> npm run allure - Generating and running the allure report