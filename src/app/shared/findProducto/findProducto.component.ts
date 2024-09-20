import { RequestModel } from './../../models/request.model';
import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-findProducto',
  templateUrl: './findProducto.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindProductoComponent {

  @ViewChild('dialogProducto')  dialogoProducto: DynamicDialogRef;
  
  @Output() seleccionarProducto = new EventEmitter();
    
  private _serviceProducto=inject(ProductosService)

  mostrarFindProducto: boolean = false;
  buscarProducto:string='';
  visibleTable: boolean = false;
  
  productoSeleccionado: ProductoModel=new ProductoModel();
  
  dataProducto: ProductoModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findProducto(){
    let request=this.createRequest(this.createDataquery("descripcion", this.buscarProducto),"GET")
    this.visibleTable=true;
    this._serviceProducto.getProductos(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataProducto=resp['data'];
        }else{
          this.dataProducto=[];
        }
      }
    })
  }

  createRequest(dataQuery:DataQueryModel, operacion:string):RequestModel{
    let request:RequestModel={
      Usuario:'',
      Ip:'000',
      Modulo:1,
      Operacion:operacion,
      Data:dataQuery
    }
    return request
  }
  createDataquery(opcion:string, dataFirst:string):DataQueryModel{
    let dataQuery:DataQueryModel={
      OpcionData:opcion,
      DataFirstQuery:dataFirst
    }
    return dataQuery
  }

  seleccionarCerrar() {
    this.mostrarFindProducto=false
    this.visibleTable=false;
    this.seleccionarProducto.emit(this.productoSeleccionado);
  }
}
