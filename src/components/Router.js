/* eslint-disable import/no-anonymous-default-export */

import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          {props.isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}
