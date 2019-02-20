import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from "./Components/Hello";

const routes: Routes = [
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }