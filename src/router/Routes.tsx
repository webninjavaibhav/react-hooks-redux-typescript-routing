import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../store/store';
import './Routes.scss';
import PublicRoute from './PublicRoute/PublicRoute';
import Dashboard from '../views/Dashboard/Dashboard';

/**
 * Creat browser history stack
 */
export const history = createBrowserHistory();

/**
 * Register applications all routes here
 * @constructor
 */
const Routes: FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PublicRoute path="/*" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
