import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../Pages/Home";
import Contacts from "../../../Pages/Contacts";
import State from "../../../Pages/States";
import ContactsView from "../../../Pages/ContactsView";

function Section() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contacts">
        <Contacts />
      </Route>
      <Route exact path="/state">
        <State />
      </Route>
      <Route exact path="/contacts/view">
        <ContactsView />
      </Route>
    </Switch>
  );
}

export default Section;
