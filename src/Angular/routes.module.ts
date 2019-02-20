import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from "./Components/Hello";
import { NotFoundComponent } from "./Components/NotFound";

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }