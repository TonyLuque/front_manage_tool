import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Inicio from "./Inicio";

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
