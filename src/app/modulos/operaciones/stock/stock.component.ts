import { Dialog } from 'primeng/dialog';
import { Component, ViewChild } from '@angular/core';
import { DialogingresostockComponent } from './dialogingresostock/dialogingresostock.component';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: ``
})
export class StockComponent {
  @ViewChild('dialogStock') dialogStock!:DialogingresostockComponent;

  loading: boolean = false;

  filtro: string = '';

  productos: any[] =
    [{
      "stockId": 1,
      "empresaId": 1,
      "empresaDescripcion": "EmpresaPrueba",
      "sucursalId": 1,
      "sucursalDescripcion": "ProveedorPrueba",
      "bodegaId": 1,
      "bodegaDescripcion": "BodegaPrueba",
      "prodId": 1,
      "prodDescripcion": "telefono",
      "cantidadStock": 700,
      "estadoId": 1,
      "estadoDescripcion": "activo",
      "fechaHoraReg": "2024-07-19T08:23:00",
      "usuIdReg": 1,
      "usuRegName": "administrador", 
      "datos":{
        "accion":"aumentar",
        "cantidad":100
      }
    }]
    openDialStock(producto:any){
      this.dialogStock.producto=this.productos;
      this.dialogStock.visible=true;
    }
ingresarStock(){

}




}
