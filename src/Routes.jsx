import React from "react";
import { Switch, Route } from "react-router-dom";
import Tuner from "./components/MainView/Tuner/Tuner";
import Intent from "./components/MainView/Intent/Intent";
import Player from "./components/MainView/Player/Player";
import Report from "./components/MainView/Report/Report";
import NER from "./components/MainView/NER/NER";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/tuner" component={Tuner}></Route>
      <Route exact path="/trainer/intent" component={Intent}></Route>
      <Route exact path="/trainer/ner" component={NER}></Route>
      <Route exact path="/player" component={Player}></Route>
      <Route exact path="/report" component={Report}></Route>
    </Switch>
  );
};

export default Routes;
