import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Loadable from "react-loadable";
import Hello from "./Components/Hello";
import NotFound from "./Components/NotFound";

const LazyLoadComponent = Loadable({
  loader: () => import(/* webpackChunkName: "LazyReact" */ './Components/LazyLoad'),
  loading: () => <h2>Loading...</h2>,
});

export default () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route exact path="/lazy-load" component={LazyLoadComponent} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
