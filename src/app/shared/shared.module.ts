import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule

  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ]
})
export class SharedModule { }
