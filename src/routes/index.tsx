import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// History
import { history } from '../redux/store';

// Components
import GlobalStyles from '../components/GlobalStyles';
import MobileHeader from '../components/MobileHeader';
import Nav from '../components/Nav';

// Containers
import Favorites from './Favorites';
import Search from './Search';

const AppRouter = props =>
  (
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <MobileHeader />
        <Nav />

        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
          <Redirect from="/" to="/search" />
        </Switch>

      </ConnectedRouter>
  );

export default AppRouter;
