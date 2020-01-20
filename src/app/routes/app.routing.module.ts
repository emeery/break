import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TweetsComponent } from '../components/nv/tweets/tweets.component';
import { AnswersComponent } from '../components/nv/answers/answers.component';
import { MediaComponent } from '../components/nv/media/media.component';
import { LikesComponent } from '../components/nv/likes/likes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../auth/aut.guard';

const rutas: Routes = [
    {path: '', redirectTo: 'w', pathMatch: 'full'},
    {path: 'w', component: DashboardComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'tweets', component: TweetsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'w'} // bg
    // {path: 'replies', component: AnswersComponent},
    // {path: 'media', component: MediaComponent},
    // {path: 'likes', component: LikesComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
