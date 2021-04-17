import React from "react";
import { Switch, Route } from "react-router-dom";
import Tuner from "./components/MainView/Tuner/Tuner";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tuner" component={Tuner}></Route>
    </Switch>
  );
};

export default Routes;
