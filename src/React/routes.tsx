import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Hello from "./Components/Hello";

export default () => (
  <Router basename="/">
    <Route path="/hello" component={Hello} />
  </Router>
);
