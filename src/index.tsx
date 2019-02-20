import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppModule } from './app.module';
import Router from "./React/routes";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

ReactDOM.render(
  <Router />,
  document.getElementById("react")
);
