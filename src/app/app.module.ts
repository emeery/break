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
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddtweetComponent } from './components/addtweet/addtweet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { EdittweetComponent } from './components/edittweet/edittweet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatVideoModule } from 'mat-video';
<<<<<<< HEAD
import { AuthInterceptor } from './auth/aut.interceptor';
=======
import { AuthInterceptor} from './auth/aut.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
// import { ErrorI}
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
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
    SignupComponent,
    LoginComponent,
    EdittweetComponent,
    DashboardComponent,
    ProfileComponent,
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
<<<<<<< HEAD
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
=======
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorIntercepto, multi: true}
  ],
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
  entryComponents: [ AddtweetComponent, EdittweetComponent, LoginComponent, SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
