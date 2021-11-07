import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { reduceHomePath } from "./pathReducers";

//Pages
import { HomePage } from "../pages/homePage";
import { ExampleReduxPage } from "../pages/exampleReduxPage";
import { SignUpPage } from "../pages/signUpPage";
import { LoginPage } from "../pages/loginPage";
import { MapPage } from "../pages/mapPage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path={reduceHomePath()} component={HomePage} />
      <Route exact path="/example" component={ExampleReduxPage} />\
      <Route exact path="/signUp" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/map" component={MapPage} />
      <Redirect to={reduceHomePath()} />
    </Switch>
  );
};