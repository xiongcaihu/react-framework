/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config';

type RootMenu = React.ComponentType<RouteConfigComponentProps>;

const Root: RootMenu = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route?.routes)}
  </div>
);

const Home: RootMenu = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child: RootMenu = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route?.routes, { someProp: 'these extra props are optional' })}
  </div>
);

const GrandChild: RootMenu = () => (
  <div>
    <h3>Grand Child</h3>
  </div>
);

const routes: RouteConfig[] = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild,
          },
        ],
      },
    ],
  },
];

ReactDOM.render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root'),
);
