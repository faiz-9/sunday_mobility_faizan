import React from "react";

import Register from "./Register_faiz";
import Login_faiz from "./Login_faiz";
import User_details from "./User_details";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login_faiz} />
      <Route exact path="/users" component={User_details} />
    </Switch>
  );
};

export default App;
