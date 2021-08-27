import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { TweetsComponent } from '../components/pages/tweets/tweets.component';
import { DashboardComponent } from '../components/layout/dashboard/dashboard.component';
import { AuthGuard } from '../auth/aut.guard';

const rutas: Routes = [
    {path: '', redirectTo: 'w', pathMatch: 'full'},
    {path: 'w', component: DashboardComponent},
    // {path: 'profile', component: ProfileComponent},
    {path: 'tweets',canActivate: [AuthGuard], component: TweetsComponent},
    {path: '**', redirectTo: 'w'} //
  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
