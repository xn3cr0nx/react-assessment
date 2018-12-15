import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import routes from "routes.jsx";

const AppRouter = props => (
  <HashRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </HashRouter>
);

AppRouter.propTypes = {
};

export default AppRouter;
