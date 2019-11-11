import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Redux Store
import configureStore from './redux/store';

// Component
import AppRouter from './routes';

// Initialize store
const store = configureStore();

declare global {
  interface Window {
    Cypress: any;
    store: any;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>, document.getElementById('root') as HTMLElement);

if (window.Cypress) {
  window.store = store;
}
