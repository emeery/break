import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TweetsComponent } from '../components/nv/tweets/tweets.component';
import { AnswersComponent } from '../components/nv/answers/answers.component';
import { MediaComponent } from '../components/nv/media/media.component';
import { LikesComponent } from '../components/nv/likes/likes.component';



const rutas: Routes = [
    {path: '', redirectTo: '/tweets', pathMatch: 'full'},
    // {path: 'recetas', loadChildren: '../components/recetas/recetas.module#RecetasModule'  },
    {path: 'tweets', component: TweetsComponent},
    {path: 'replies', component: AnswersComponent},
    {path: 'media', component: MediaComponent},
    {path: 'likes', component: LikesComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
