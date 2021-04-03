import "./App.css";
import Sidebar from "./components/sidebar";
import { Route, Switch } from "react-router-dom";
import Trainer from "./components/trainer";
import Tuner from "./components/tuner";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="container">
        <Switch>
          <Route path="/trainer" component={Trainer}></Route>
          <Route path="/tuner" component={Tuner}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
