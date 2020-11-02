import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { MainListComponent } from './components/main-list/main-list.component';
import { StoreModule } from '@ngrx/store';
import { DemoMaterialModule } from '../../material.module';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [MainListComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    DemoMaterialModule,
  ],
  exports: [
    DemoMaterialModule
  ],
})
export class UsersListModule { }
