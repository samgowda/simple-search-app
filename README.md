# Spiffy Giffy App Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a single-page application that uses client-side transitions to affect route changes.

### Installation
- Ensure you have [Yarn](https://yarnpkg.com/en/) installed.
- Run `yarn` to install dependencies.
- Run `yarn start` to run the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Code
All app-specific typescript code is located in `/src`. App icons and the base `index.html` file can be found in `/public`. Within `/src`, the code is organized into relevant subdirectories to help seperate concerns. Those subdirectories are:

- **index.tsx**: The entry point for the application. Wraps the app in the redux store and router. Also attaches the redux store the window object when in dev mode for Cypress testing.
- **components**: Directory where all app components and their corresponding styles live.
- **redux**: Directory where all state management files live.
- **services**: Directory where the functions that interface with external services live.
- **styles**: Directory that houses global styles and where style definitions live.

### Tests
Tests are written using [Cypress](https://www.cypress.io/) and can be found in the `/cypress` directory. To execute tests using the CLI, run `yarn cypress run`. For extra command line arguments, see the [docs](https://docs.cypress.io/guides/guides/command-line.html). To launch the Cypress Test Runner, run `yarn cypress open`. In either case, ensure that you have started the app (`yarn start`).

### Notable Dependencies

- [ReactJS](https://reactjs.org/): Core javascript framework
- [Redux](https://redux.js.org/): State management
- [Redux Saga](https://redux-saga.js.org/): Effect management
- [Styled Components](https://www.styled-components.com/): Styling
- [Typescript](https://www.typescriptlang.org/): Javascript superset
- [React Router](https://reacttraining.com/react-router/): Routing, ideal for accesiblity and seo concerns
- [Axios](https://github.com/axios/axios): HTTP client

## Data Flow

For large React applications (this currently simple app was built with the assumption it will scale) the data flow can become increasingly complex and convoluted. To help minimize this complexity the app utilizes Redux for state manangement and async middleware.

All actions that require some type of asynchronous code (e.g. network requests) are intercepted by [Redux Sagas](https://github.com/redux-saga/redux-saga). These sagas are generators that listen for actions and yield a new action once the async process has completed. Sagas let you express debouncing, cancellation, routing, and API calls in a single place.

### TODO
- For optimal SEO app should be server side rendered. [Next.js](https://nextjs.org/) is a great option. Check out my custom boilerplate [here](https://github.com/samgowda/next-app-custom-boilerplate) to get started with server side React without spending time on config and component structure.

- Refactor state to use "selectors". The [Reselect](https://github.com/reactjs/reselect) library is used for components to "memoize" the Redux state and avoid constantly re-fetching when the Redux state has not changed. The "selectors" are injected before the Redux state is mapped to the component props.

- Localization. Add support for multi-language search. The [react-intl](https://github.com/yahoo/react-intl) library helps manage localization. All text should be displayed through a `<FormattedMessage >` component so that it can dynamically change when the locale changes.

- Add aria-label attributes for ADA compliance.

- Finish cypress tests and add unit test coverage with [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html).

- As app scales use [react-helmet](https://github.com/nfl/react-helmet) to set html metadata in header of certain components for SEO purposes.

# simple-search-app
