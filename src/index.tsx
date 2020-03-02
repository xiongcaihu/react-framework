import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { IntlProvider, useIntl } from 'react-intl';

type RootMenu = React.ComponentType<RouteConfigComponentProps>;

const Root: RootMenu = ({ route }) => {
  const intl = useIntl();
  return (
    <div>
      <h1>Root</h1>
      <p>
        {intl.formatMessage({
          id: 'name',
        })}
      </p>
      {/* child routes won't render without this */}
      {renderRoutes(route?.routes)}
    </div>
  );
};

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

const EN = {
  name: 'cy',
};

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider locale="en" messages={EN}>
      {renderRoutes(routes)}
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
