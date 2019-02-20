import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadRouteModule } from './lazy-load-route.module';
import { LazyLoadComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRouteModule
  ],
  declarations: [
    LazyLoadComponent
  ]
})
export class LazyLoadModule { }