import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { TableModule } from 'primeng/table';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { dialogProveedorComponent } from './proveedor/dialogProveedor/dialogProveedor.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { FindCiudadModule } from 'src/app/shared/findCiudad/findCiudad.module';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ProveedorComponent,
    dialogProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    TableModule,
    FormsModule,
    DialogModule,
    ToastModule,
    DividerModule,
    DropdownModule,
    InputGroupModule,
    FindCiudadModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ]
})
export class ProveedorModule { }
