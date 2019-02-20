import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './Angular/routes.module';
import { AppComponent } from './Angular/Components/App';
import { HelloComponent } from './Angular/Components/Hello';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
