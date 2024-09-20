import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { ProveedorModel } from 'src/app/models/proveedor.model';
import { RequestModel } from 'src/app/models/request.model';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-findproveedor',
  templateUrl: './findproveedor.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindproveedorComponent {

  @ViewChild('dialogProveedor')  dialogoProveedor: DynamicDialogRef;
  
  @Output() seleccionarProveedor = new EventEmitter();
    
  private _serviceProveedor=inject(ProveedorService)

  mostrarFindProveedor: boolean = false;
  buscarProveedor:string='';
  visibleTable: boolean = false;
  
  proveedorSeleccionado: ProveedorModel=new ProveedorModel();
  
  dataProveedor: ProveedorModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findProveedor(){
    let dataQuery:DataQueryModel={
      OpcionData:'nombre',
      DataFirstQuery:this.buscarProveedor
    }
    let request:RequestModel={
      Usuario:'',
      Ip:'000',
      Modulo:1,
      Operacion:'GET',
      Data:dataQuery
    }
    this.visibleTable=true;
    this._serviceProveedor.getProveedor(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataProveedor=resp['data'];
        }else{
          this.dataProveedor=[];
        }
      }
    })
  }

  seleccionarCerrar() {
    this.mostrarFindProveedor=false
    this.visibleTable=false;
    this.seleccionarProveedor.emit(this.proveedorSeleccionado);
  }
}
