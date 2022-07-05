## Test assignment for ABN AMRO

I've decided to use Vue 3 framework, mainly for 2 reasons:

- I have been interested in trying the new version of Vue for quite a while, and that seemed like a perfect opportunity for it.
- Position implies development using Vue.

I added `vue-router` library for routing and used `vue-cli` to initiate the project.
Styling wise I tried to keep it minimal, in real life I would likely implement a custom scrolling solution for the horizontal lists,
that looks uniform across platforms, but I find native scrolling sufficient for the goals of test application.

## Project structure
- App.vue - main entry point to the app. 
- /api - access Tvmaze API using the native `fetch`.
- /components - app components for displaying information about shows.
- /types - typescript types for shows.
- /store - simple reactive data storage solution, inspired by Vue 3 docs.
- /tests - components unit tests

## Installing and starting the project
To install project, please use either `yarn` or `npm`.
To install project, please run `yarn install` for yarn or `npm install` for npm.
To start project, please use `yarn serve` or `npm run serve`
To run tests, please run `yarn run test:unit`