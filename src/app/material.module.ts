import {NgModule} from '@angular/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    OverlayModule,
    MatFormFieldModule
  ]
})
export class DemoMaterialModule {}


/** Copyright 2020 Google LLC. All Rights Reserved. Use of this source code is governed by an MIT-style license that 
 can be found in the LICENSE file at http://angular.io/license */