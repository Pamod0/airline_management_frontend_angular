import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { RegisterPageComponent } from './user/register-page/register-page.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UsersListComponent } from './user-management/users-list/users-list.component';
import { AddEditUsersComponent } from './user-management/add-edit-users/add-edit-users.component';

import { LoginPageTestComponent } from './user/login-page-test/login-page-test.component';

const routes: Routes = [
  { path: '', component: HomePageComponent  },
  { path: 'user/login', component: LoginPageComponent },
  { path: 'user/register', component: RegisterPageComponent },
  { path: 'user/forgot-password', component: ForgotPasswordComponent },
  { path: 'user/home', component: UserHomeComponent},
  { path: 'management/userslist', component: UsersListComponent },
  { path: 'user/details', component: AddEditUsersComponent },
  { path: 'test', component: LoginPageTestComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
