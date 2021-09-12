import React from "react";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Inicio from "../pages/Inicio";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
