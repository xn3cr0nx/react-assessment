import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import PublicLayout from "components/layouts/PublicLayout.jsx";
import routes from "routes.jsx";

// This approach with HOC enables the creation of multiple layouts
// you just need to call withLayout passing different kind of layouts
const withLayout = (Layout, Component, props) => (
  <Layout {...props}>
    <Component />
  </Layout>
);
const publicLayout = Component => () => withLayout(PublicLayout, Component);

const AppRouter = props => (
  <HashRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} exact={route.exact} render={publicLayout(route.component)} />
      ))}
    </Switch>
  </HashRouter>
);

AppRouter.propTypes = {
};

export default AppRouter;
