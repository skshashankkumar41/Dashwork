import "./App.css";
import Sidebar from "./components/sidebar";
import { Route, Switch } from "react-router-dom";
import Trainer from "./components/trainer";
import Tuner from "./components/tuner";
import Player from "./components/player";
import Report from "./components/report";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="container">
        <Switch>
          <Route path="/trainer" component={Trainer}></Route>
          <Route path="/tuner" component={Tuner}></Route>
          <Route path="/player" component={Player}></Route>
          <Route path="/report" component={Report}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
