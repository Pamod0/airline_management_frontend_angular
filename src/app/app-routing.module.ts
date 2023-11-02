import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UsersListComponent } from './user-management/users-list/users-list.component';
import { AddEditUsersComponent } from './user-management/add-edit-users/add-edit-users.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: 'register', component: RegisterPageComponent },
  { path: 'userlist', component: UsersListComponent },
  { path: 'details', component: AddEditUsersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
