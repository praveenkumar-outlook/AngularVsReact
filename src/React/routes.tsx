import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Hello from "./Components/Hello";
import NotFound from "./Components/NotFound";

export default () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
