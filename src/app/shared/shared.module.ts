import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FindcategoriaModule } from './findcategoria/findcategoria.module';
import { FindempresaModule } from './findempresa/findempresa.module';
import { FindcategoriaComponent } from './findcategoria/findcategoria.component';
import { FindempresaComponent } from './findempresa/findempresa.component';
import { FormControl } from '@angular/forms';
import { FindproveedorComponent } from './findproveedor/findproveedor.component';
import { FindproveedorModule } from './findproveedor/findproveedor.module';
import { FindSucursalComponent } from './findSucursal/findSucursal.component';
import { FindBodegaComponent } from './findBodega/findBodega.component';
import { FindBodegaModule } from './findBodega/findBodega.module';
import { FindSucursalModule } from './findSucursal/findSucursal.module';
import { FindProductoComponent } from './findProducto/findProducto.component';
import { FindProductoModule } from './findProducto/findProducto.module';
import { FindCiudadModule } from './findCiudad/findCiudad.module';
import { FindCiudadComponent } from './findCiudad/findCiudad.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DialogModule,
    FindcategoriaModule,
    FindempresaModule, 
    FindproveedorModule,
    FindBodegaModule,
    FindSucursalModule,
    FindProductoModule,
    FindCiudadModule
  ],
  exports: [
    FindempresaComponent,
    FindcategoriaComponent,
    FindproveedorComponent,
    FindSucursalComponent,
    FindBodegaComponent,
    FindProductoComponent,
    FindCiudadComponent
  ]
})
export class SharedModule { }
