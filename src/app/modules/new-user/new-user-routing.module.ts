import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SginInComponent} from './components/sgin-in/sgin-in.component';
const routes: Routes = [
  {
    path: '',
    component: SginInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUserRoutingModule { }
