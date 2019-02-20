import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadComponent } from './index';


const routes: Routes = [
  {
    path: '',
    component: LazyLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRouteModule { }