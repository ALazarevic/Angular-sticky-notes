import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginGuard } from '../core/guards/login.guard';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
      { path: 'dashboard', component: DashboardsComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
  public static components = [LoginComponent, DashboardsComponent, ProfileComponent, SettingsComponent];
}
