import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListComponent } from './components/main-list/main-list.component';
const routes: Routes = [
  {
    component: MainListComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
