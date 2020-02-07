# Helicopter Shark

How hard is it to create an automated misinformation detector? Let's find out!

## The goal

MVP: A fully fledged webapp that can detect whether an uploaded image is the infamous [Helicopter Shark](https://en.wikipedia.org/wiki/Helicopter_Shark) image:

![Helicopter shark](https://upload.wikimedia.org/wikipedia/en/8/84/Helicopter_Shark_Thumb.jpg)

After that, it is relatively trivial* to expand this to an app that all misinformation that has ever been distributed.

&ast; *Note: may not be that trivial*

## A rough timeline of goals

  1. Get a frontend up and running with mock interface, upload & calls
  2. An API that carries out the upload and mock calls
  3. Database of images
  4. Pipeline for running ML tasks on the images
  5. Update frontend to get actual result from pipeline output
  6. Generalise backend for other misinformation images
  7. Other stuff (mobile app?)

## Stuff that will make this look good

* SCSS & Typescript
* Testing (with coverage)
* Linting
* CI
* Hosting (Docker?)
* Setup with AWS
* Security (XSS/CSP)

## Running

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
