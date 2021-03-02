import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IExtendedRouteProps } from '../interface/Routes';

/**
 * Public route don't need any auth any auth can access
 * @param Component
 * @param rest
 * @constructor
 */
const PublicRoute: FC<IExtendedRouteProps> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props: RouteComponentProps) => <Component {...props} />} />
);

export default PublicRoute;
