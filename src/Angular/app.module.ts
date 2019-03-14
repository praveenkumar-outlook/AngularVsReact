import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routes.module';
import { AppComponent } from './Components/App';
import { HelloComponent } from './Components/Hello';
import { BulkDataComponent } from './Components/BulkData';
import { SecurityComponent } from './Components/Security';
import { NotFoundComponent } from './Components/NotFound';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BulkDataComponent,
    SecurityComponent,
    NotFoundComponent
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
