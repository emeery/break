import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NavigationComponent } from './components/nv/navigation/navigation.component';
import { TweetsComponent } from './components/nv/tweets/tweets.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { AnswersComponent } from './components/nv/answers/answers.component';
import { MediaComponent } from './components/nv/media/media.component';
import { LikesComponent } from './components/nv/likes/likes.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddTweetComponent } from './components/nv/tweets/addtweet.component';
import { AddtweetComponent } from './components/addtweet/addtweet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    TweetsComponent,
    AnswersComponent,
    MediaComponent,
    LikesComponent,
    AddtweetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [ AddtweetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
