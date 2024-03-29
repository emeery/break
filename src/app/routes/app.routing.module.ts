import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../components/layout/dashboard/dashboard.component';
import { AuthGuard } from '../auth/aut.guard';
import { ProfileComponent } from '../components/pages/profile/profile.component';

const rutas: Routes = [
    {path: '', redirectTo: 'w', pathMatch: 'full'},
    {path: 'w', component: DashboardComponent},
    {path: 'profile',canActivate: [AuthGuard], component: ProfileComponent},
    {path: '**', redirectTo: 'w'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
