import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

function Auth() {
  const { url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${url}/login`} component={Login} />
        <Route path={`${url}/signup`} component={Signup} />
      </Switch>
    </div>
  );
}

export default Auth;
