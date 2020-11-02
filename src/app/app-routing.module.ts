import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'newUser',
    loadChildren: () => import('./modules/new-user/new-user.module').then(m => m.NewUserModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./modules/user-list/users-list.module').then(m => m.UsersListModule)
  },
  {
    path: '',
    redirectTo: 'newUser',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
