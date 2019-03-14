import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Loadable from "react-loadable";
import Hello from "./Components/Hello";
import BulkData from "./Components/BulkData";
import NotFound from "./Components/NotFound";
import Security from "./Components/Security";

const LazyLoadComponent = Loadable({
  loader: () => import(/* webpackChunkName: "LazyReact" */ './Components/LazyLoad'),
  loading: () => <h2>Loading...</h2>,
});

export default () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route exact path="/lazy-load" component={LazyLoadComponent} />
      <Route exact path="/bulk-data" component={BulkData} />
      <Route exact path="/security" component={Security} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
