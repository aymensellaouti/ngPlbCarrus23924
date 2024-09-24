import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communication/pere/pere.component';
import { FilsComponent } from './communication/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './cv/todo/todo/todo.component';
import { WeekTodoComponent } from './cv/todo/week-todo/week-todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';

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
    FilsComponent,
    CvComponent,
    ListComponent,
    CvItemComponent,
    CvCardComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    WeekTodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    DetailsCvComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent
  ],
  imports: [
    // les modules dont on a besoin pour faire le job
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    // les dépendances
    LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
