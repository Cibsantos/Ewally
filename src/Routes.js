import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Utils/Providers/auth";
import Login from "./Pages/Login/Login";
import Balance from "./Pages/Balance/balance";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />{" "}
      <AuthenticatedRoute path="/extrato" component={Balance} />{" "}
    </Switch>{" "}
  </BrowserRouter>
);

export default Routes;
