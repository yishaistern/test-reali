import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { SginInComponent } from './components/sgin-in/sgin-in.component';
import { SginFormComponent } from './components/sgin-form/sgin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SginInComponent, SginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    NewUserRoutingModule,
  ],
  exports: [
    DemoMaterialModule
  ],
  entryComponents: [
    SginFormComponent
  ]

})
export class NewUserModule { }
