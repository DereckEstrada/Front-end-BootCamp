import { RequestModel } from './../../models/request.model';
import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-findCiudad',
  templateUrl: './findCiudad.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindCiudadComponent {

  @ViewChild('dialogCiudad')  dialogCiudad: DynamicDialogRef;
  
  @Output() seleccionarCiudad = new EventEmitter();
    
  private _serviceCiudad=inject(CiudadService)

  mostrarFindCiudad: boolean = false;
  buscarCiudad:string='';
  visibleTable: boolean = false;
  
  ciudadSeleccionada: CiudadModel=new CiudadModel();
  
  dataCiudad: CiudadModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findCiudad(){
    let request=this.createRequest(this.createDataquery("nombre", this.buscarCiudad),"GET")
    this.visibleTable=true;
    this._serviceCiudad.getCiudad(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataCiudad=resp['data'];
        }else{
          this.dataCiudad=[];
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
    this.mostrarFindCiudad=false
    this.visibleTable=false;
    this.seleccionarCiudad.emit(this.ciudadSeleccionada);
  }
}
