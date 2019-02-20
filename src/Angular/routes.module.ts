import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from "./Components/Hello";
import { NotFoundComponent } from "./Components/NotFound";

const routes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'lazy-load',
    loadChildren: () => import(/* webpackChunkName: "LazyAngular" */ "./Components/LazyLoad/lazy-load.module")
      .then((module) => module["LazyLoadModule"])
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule { }