import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogComponent } from 'primeng/dynamicdialog';
import { StockModel } from 'src/app/models/stock.model';

@Component({
  selector: 'app-dialogingresostock',
  templateUrl: './dialogingresostock.component.html',
  styles: ``,
  providers:[DialogService]
})
export class DialogingresostockComponent {
  stock: StockModel=new StockModel();
  @Output() emiterStock=new EventEmitter<StockModel>();
  @ViewChild('dialogStock') dialogStock!:DynamicDialogComponent;

  cantidad:number;
  private _dynamicDialog=inject(DialogService)
  visible: boolean = false;
  
  constructor(){
  }
  guardarStock(){
    this.stock.cantidadStock=this.stock.cantidadStock+this.cantidad;
    this.visible=false;
    this.cantidad=null
    this.emiterStock.emit(this.stock);    
  }
}
