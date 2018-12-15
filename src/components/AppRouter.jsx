import React from "react";
import PropTypes from "prop-types";
// import { HashRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicLayout from "components/layouts/PublicLayout.jsx";
import { layoutRoutes, emptyRoutes } from "routes.jsx";

// This approach with HOC enables the creation of multiple layouts
// you just need to call withLayout passing different kind of layouts
const withLayout = (Layout, Component, props) => (
  <Layout {...props}>
    <Component />
  </Layout>
);
const publicLayout = Component => () => withLayout(PublicLayout, Component);

const AppRouter = props => (
  <BrowserRouter>
    <Switch>
      {layoutRoutes.map(route => (
        <Route key={route.path} path={route.path} exact={route.exact} render={publicLayout(route.component)} />
      ))}
      {emptyRoutes.map(route => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </BrowserRouter>
);

AppRouter.propTypes = {};

export default AppRouter;
