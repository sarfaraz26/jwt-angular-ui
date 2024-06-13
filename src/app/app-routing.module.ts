import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path : '', 
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'user/profile',
    component : ProfileComponent,
    canActivate : [authGuard]
  },
  {
    path : 'user/admin',
    component : AdminComponent,
    canActivate : [authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
