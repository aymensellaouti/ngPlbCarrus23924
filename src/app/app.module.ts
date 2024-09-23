import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communication/pere/pere.component';
import { FilsComponent } from './communication/fils/fils.component';

@NgModule({
  declarations: [
    // Les composants pipes et directives de ce module
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent
  ],
  imports: [
    // les modules dont on a besoin pour faire le job
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // les dépendances
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
