import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { StockModule } from './stock/stock.module';
import { StockComponent } from './stock/stock.component';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    StockModule,
    SharedModule
  ],
  exports: [
    StockComponent
  ]
})
export class OperacionesModule { }
