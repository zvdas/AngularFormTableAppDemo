import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';

const routes: Routes = [
  { path: 'add_user', component: AddUserComponent },
  { path: 'view_users', component: ViewUsersComponent },
  { path: '', redirectTo:'#/view_users', pathMatch: 'full' },
  { path: '**', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }