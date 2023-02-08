/* eslint-disable import/no-anonymous-default-export */

import React from "react";

import {
  HashRouter as Router,
  //   Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

export default function AppRouter(props) {
  return (
    <>
      <Router>
        {props.isLoggedIn && <Navigation />}
        <Switch>
          {props.isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                {/* Route가  현재 이 경로라면 이게나옴 */}
                <Profile />
              </Route>
              {/* <Redirect from="*" to="/" /> */}
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
              {/* <Redirect from="*" to="/" /> */}
              {/*  Redirect를 사용하면 로그아웃후,로그인후 새로고침하면 home으로 돌아감 */}
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}
