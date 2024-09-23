import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Les composants pipes et directives de ce module
    AppComponent
  ],
  imports: [
    // les modules dont on a besoin pour faire le job
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // les dépendances
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
