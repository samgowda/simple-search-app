import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

//  Returns the store instance
const configureStore = () => {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer(history),
    composeEnhancers(...enhancers),
  );

  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga, []),
  };
};

export default configureStore;
