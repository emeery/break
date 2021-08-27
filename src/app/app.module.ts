import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TweetsComponent } from './components/pages/tweets/tweets.component';
import { AppRoutingModule } from './routes/app.routing.module';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddtweetComponent } from './components/shared/addtweet/addtweet.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { AuthInterceptor} from './auth/aut.interceptor';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ErrorInterceptor } from './auth/error.interceptor';
import { ErrorComponent } from './components/layout/error/error.component';
import { EdittweetComponent } from './components/shared/edittweet/edittweet.component';
import { MessageComponent } from './components/shared/message/message.component';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetsComponent,
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
