import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    // Les composants pipes et directives de ce module
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent
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
