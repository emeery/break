import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './routes/app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor} from './auth/aut.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { ErrorComponent } from './components/layout/error/error.component';
import { EdittweetComponent } from './components/shared/edittweet/edittweet.component';
import { MessageComponent } from './components/shared/message/message.component';
import { MatVideoModule } from 'mat-video';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ErrorComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents: [ ErrorComponent, EdittweetComponent, LoginComponent, MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
