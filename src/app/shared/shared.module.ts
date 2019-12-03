import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TableComponent, ButtonsComponent, ModalComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableComponent,
    ButtonsComponent
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
