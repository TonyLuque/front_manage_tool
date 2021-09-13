import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Inicio from "./Inicio";
import CreateUser from "./CreateUser";
import Devices from "./Devices";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createUser" component={CreateUser} />
        <Route exact path="/devices" component={Devices} />
      </Switch>
    </div>
  );
};

export default App;
