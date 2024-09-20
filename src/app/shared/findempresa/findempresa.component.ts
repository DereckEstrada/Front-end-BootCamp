import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { RequestModel } from 'src/app/models/request.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-findempresa',
  templateUrl: './findempresa.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindempresaComponent {

  @ViewChild('dialogEmpresa')  dialogoEmpresa: DynamicDialogRef;
  
  @Output() seleccionarEmpresa = new EventEmitter();
    
  private _serviceEmpresa=inject(EmpresaService)

  mostrarFindEmpresas: boolean = false;
  buscarEmpresa:string='';
  visibleTable: boolean = false;
  
  empresaSeleccionada: EmpresaModel=new EmpresaModel();
  
  dataEmpresa: EmpresaModel[]=[];

  constructor ( private dialogService: DialogService ) {}  

  findEmpresa(){
    let dataQuery:DataQueryModel={
      OpcionData:'nombre',
      DataFirstQuery:this.buscarEmpresa
    }
    let request:RequestModel={
      Usuario:'',
      Ip:'000',
      Modulo:1,
      Operacion:'GET',
      Data:dataQuery
    }
    this.visibleTable=true;
    this._serviceEmpresa.getEmpresa(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataEmpresa=resp['data'];
        }else{
          this.dataEmpresa=[];
        }
      }
    })
  }

  seleccionarCerrar() {
    this.mostrarFindEmpresas=false
    this.visibleTable=false;
    this.seleccionarEmpresa.emit(this.empresaSeleccionada);
  }
}
