import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FindcategoriaModule } from './findcategoria/findcategoria.module';
import { FindempresaModule } from './findempresa/findempresa.module';
import { FindcategoriaComponent } from './findcategoria/findcategoria.component';
import { FindempresaComponent } from './findempresa/findempresa.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DialogModule,
    FindcategoriaModule,
    FindempresaModule
  ],
  exports: [
    FindempresaComponent,
    FindcategoriaComponent
  ]
})
export class SharedModule { }
