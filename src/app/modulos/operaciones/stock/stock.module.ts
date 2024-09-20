import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogingresostockComponent } from './dialogingresostock/dialogingresostock.component';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { dialogRegistrarStockComponent } from './dialogRegistrarStock/dialogRegistrarStock.component';
import { ToastModule } from 'primeng/toast';
import { InputGroupModule } from 'primeng/inputgroup';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    StockComponent,
    DialogingresostockComponent,
    dialogRegistrarStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    DividerModule,
    DynamicDialogModule,
    ToastModule,
    InputGroupModule,
    SharedModule,
    DropdownModule, FormsModule,InputNumberModule,
    ToastModule
],
  exports: [
    StockComponent
  ]
})
export class StockModule { }
