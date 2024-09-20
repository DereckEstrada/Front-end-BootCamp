import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BodegaModel } from 'src/app/models/bodega.model';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { BodegaService } from 'src/app/services/bodega.service';

@Component({
  selector: 'app-findBodega',
  templateUrl: './findBodega.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindBodegaComponent {

  @ViewChild('dialogBodega')  dialogoBodega: DynamicDialogRef;
  
  @Output() seleccionarBodega = new EventEmitter();
    
  private _serviceBodega=inject(BodegaService)

  mostrarFindBodega: boolean = false;
  buscarBodega:string='';
  visibleTable: boolean = false;
  
  bodegaSeleccionado: BodegaModel=new BodegaModel();
  
  dataBodega: BodegaModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findBodega(){
    let request=this.createRequest(this.createDataquery("nombre", this.buscarBodega), "GET")
    this.visibleTable=true;
    this._serviceBodega.getBodega(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataBodega=resp['data'];
        }else{
          this.dataBodega=[];
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
    this.mostrarFindBodega=false
    this.visibleTable=false;
    this.seleccionarBodega.emit(this.bodegaSeleccionado);
  }
}
