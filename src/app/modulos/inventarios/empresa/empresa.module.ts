import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { TableModule } from 'primeng/table';
import { dialogEmpresaComponent } from './empresa/dialogEmpresa/dialogEmpresa.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { FindCiudadModule } from "../../../shared/findCiudad/findCiudad.module";
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ dialogEmpresaComponent,
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
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
export class EmpresaModule { }
