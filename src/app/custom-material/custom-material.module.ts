import { NgModule, } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatDialogModule, MatIconModule
    , MatListModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule , MatChipsModule , MatSelectModule],
  exports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatDialogModule, MatIconModule
    , MatListModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule , MatChipsModule , MatSelectModule],
  providers: [
    MatNativeDateModule
  ]
})
export class CustomMaterialModule {
  constructor() {
  }
}
