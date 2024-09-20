import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-findcategoria',
  templateUrl: './findcategoria.component.html',
  providers: [DialogService, MessageService]
})
export class FindcategoriaComponent {
  @ViewChild('dialogoCategoria')  dialogoCategoria: DynamicDialogRef;
  @Output()seleccionarCategoria = new EventEmitter();

  private _servicesCategoria=inject(CategoriaService);

  mostrarCategorias: boolean = false;
  dataCategoria: CategoriaModel[]=[];
  categoriaSeleccionada: CategoriaModel;
  buscarCategoria:string='';
  visibleTable: boolean = false;

  constructor(private dialogService: DialogService, private messageService: MessageService){}
  
  findCategorias() {
    let dataQuery:DataQueryModel={
      OpcionData:'2',
      DataFirstQuery:this.buscarCategoria
    }
    let request:RequestModel={
      Usuario:'',
      Ip:'000',
      Modulo:1,
      Operacion:'GET',
      Data:dataQuery
    }
    this.visibleTable=true;
    this._servicesCategoria.getCategoria(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.dataCategoria=resp['data'];
        }else{
          this.dataCategoria=[];
        }
      }
    })
  }

  seleccionarCerrar() {    
    this.mostrarCategorias=false;
    this.visibleTable=false;
    this.buscarCategoria='';
    this.seleccionarCategoria.emit(this.categoriaSeleccionada);
  }

}
