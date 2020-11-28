import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ranking from "./pages/Ranking";
import Error from "./components/Error";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/ranking" component={Ranking} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
