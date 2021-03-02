import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface IExtendedRouteProps extends RouteProps {
  /**
   * React Component
   */
  component: React.ComponentType<any>;
}
