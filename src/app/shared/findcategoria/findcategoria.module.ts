import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FindcategoriaComponent } from './findcategoria.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    FindcategoriaComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    FindcategoriaComponent
  ]
})
export class FindcategoriaModule { }
