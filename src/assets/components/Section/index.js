import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../Pages/Home";
import Login from "../../../Pages/Login";

function Section() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default Section;
