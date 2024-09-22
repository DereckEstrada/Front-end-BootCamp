import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BodegaRoutingModule } from './bodega-routing.module';
import { BodegaComponent } from './bodega/bodega.component';
import { DialogBodegaComponent } from './bodega/dialogbodega/dialogbodega.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputGroupModule } from 'primeng/inputgroup';


@NgModule({
  declarations: [
    BodegaComponent,
    DialogBodegaComponent
  ],
  imports: [
    CommonModule,
    BodegaRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    DialogModule,
    SharedModule,
    InputGroupModule
  ]
})
export class BodegaModule { }
