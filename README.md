# Payment portal Cypress tests
This project has tests for [Web Payment portal](https://github.com/alexandrchumakin/portal-payment-app) that are using
Cypress as test framework.

## Develop environment
In order to work with project locally your development environment should have the following packages installed:
- node ^16.*
- npm ^6.*

## Project setup

```
npm install
```

### Cypress installation
```
npx cypress install
```

To verify Cypress installation:
```
npx cypress verify
```

### Run tests

Headless mode:
```
npx cypress run
```
or 
```
npm run test
```

Headful mode:
```
npx cypress run --headed
```


## Docker setup
To run dependent web service in a container and tests in docker in one go:
```
docker-compose up --abort-on-container-exit
```
