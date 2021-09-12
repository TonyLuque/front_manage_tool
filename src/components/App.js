import React from "react";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Inicio from "../pages/inicio";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/inicio" component={Inicio} />
      </Switch>
    </div>
  );
};

export default App;
