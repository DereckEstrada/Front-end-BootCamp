import { RequestModel } from './../../models/request.model';
import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { SucursalModel } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-findSucursal',
  templateUrl: './findSucursal.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindSucursalComponent {

  @ViewChild('dialogSucursal')  dialogoSucursal: DynamicDialogRef;
  
  @Output() seleccionarSucursal = new EventEmitter();
    
  private _serviceSucursal=inject(SucursalService)

  mostrarFindSucursal: boolean = false;
  buscarSucursal:string='';
  visibleTable: boolean = false;
  
  sucursalSeleccionado: SucursalModel=new SucursalModel();
  
  dataSucursal: SucursalModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findSucursal(){
    let request=this.createRequest(this.createDataquery("nombre", this.buscarSucursal),"GET")
    this.visibleTable=true;
    this._serviceSucursal.getSucursal(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataSucursal=resp['data'];
        }else{
          this.dataSucursal=[];
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
    this.mostrarFindSucursal=false
    this.visibleTable=false;
    this.seleccionarSucursal.emit(this.sucursalSeleccionado);
  }
}
