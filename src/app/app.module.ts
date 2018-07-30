import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
