FROM --platform=linux/amd64 cypress/included:cypress-12.6.0-node-16.18.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1

WORKDIR /app
COPY . /app

RUN npm ci
RUN npx cypress install
RUN npx cypress verify
