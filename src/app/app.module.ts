import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NavigationComponent } from './components/nv/navigation/navigation.component';
import { TweetsComponent } from './components/nv/tweets/tweets.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { AnswersComponent } from './components/nv/answers/answers.component';
import { MediaComponent } from './components/nv/media/media.component';
import { LikesComponent } from './components/nv/likes/likes.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddtweetComponent } from './shared/addtweet/addtweet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MatVideoModule } from 'mat-video';
import { AuthInterceptor} from './auth/aut.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorInterceptor } from './auth/error.interceptor';
import { ErrorComponent } from './layout/error/error.component';
import { EdittweetComponent } from './shared/edittweet/edittweet.component';
import { MessageComponent } from './shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TweetsComponent,
    AnswersComponent,
    MediaComponent,
    LikesComponent,
    AddtweetComponent,
    SignupComponent,
    LoginComponent,
    EdittweetComponent,
    DashboardComponent,
    ProfileComponent,
    ErrorComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatVideoModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents: [ ErrorComponent, AddtweetComponent, EdittweetComponent, LoginComponent, SignupComponent, MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
