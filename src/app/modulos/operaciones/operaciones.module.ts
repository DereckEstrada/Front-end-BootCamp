import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { StockModule } from './stock/stock.module';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    StockModule
  ],
  exports: [
    StockComponent
  ]
})
export class OperacionesModule { }
