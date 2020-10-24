import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../Pages/Home";
import Login from "../../../Pages/Login";
import Carrinho from "../../../Pages/Carrinho";

function Section() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/carrinho">
        <Carrinho />
      </Route>
    </Switch>
  );
}

export default Section;
