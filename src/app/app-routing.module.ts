import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UsersListComponent } from './user-management/users-list/users-list.component';
import { AddEditUserListComponent } from './user-management/add-edit-user-list/add-edit-user-list.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: 'register', component: RegisterPageComponent },
  { path: 'userlist', component: UsersListComponent },
  { path: 'details', component: AddEditUserListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
