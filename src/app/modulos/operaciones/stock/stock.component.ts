import { Dialog } from 'primeng/dialog';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DialogingresostockComponent } from './dialogingresostock/dialogingresostock.component';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { StockService } from 'src/app/services/stock.service';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { StockModel } from 'src/app/models/stock.model';
import { dialogRegistrarStockComponent } from './dialogRegistrarStock/dialogRegistrarStock.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: ``,
  providers: [MessageService]
})
export class StockComponent implements OnInit {
  @ViewChild('dialogStock') dialogStock!:DialogingresostockComponent;
  @ViewChild('dialogRegistro') dialogRegistro!:dialogRegistrarStockComponent;
  private _serviceStock=inject(StockService);
  private messageService=inject(MessageService)

  productStock:StockModel[]=[];
  loading: boolean = false;
  message:string='';


  search: string = '';
  ngOnInit(): void {
    let request=this.createRequest(this.createDataQuery('all',''), 'GET');
    this._serviceStock.getStock(request).subscribe({
      next:resp=>this.productStock=resp['data']
    })
  }
  openRegistrarStock(){    
    this.message="Stock registrado correctamente"
    this.dialogRegistro.visible=true;
  }
  openDialStock(stock:StockModel){
    this.message="Stock actualizado correctamente";
     this.dialogStock.stock=stock;
      this.dialogStock.visible=true;
  }
    
  registrarStock(stock:StockModel){
    let request=this.createRequest(stock, "POST");
    this._serviceStock.mantenimientoStock(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.ngOnInit();
          this.messageService.add({severity:'success', summary:'Notificación VMTDev Bootcamp', detail:this.message});      
        }
      }
    })
  }
createDataQuery(peticion:string, valor:string):DataQueryModel{
  let dataQuery:DataQueryModel={
    OpcionData:peticion,
    DataFirstQuery:valor
  };
  return dataQuery;
}

createRequest(data:any, operacion:string):RequestModel{
  let request:RequestModel={
    Usuario:'',
    Ip:'00',
    Modulo:1,
    Operacion:operacion,
    Data:data
  };
  return request;
}
buscarStock(){
  let request=this.createRequest(this.createDataQuery('descripcion',this.search), 'GET');
  this._serviceStock.getStock(request).subscribe({
    next:resp=>this.productStock=resp['data']
  })
}


}
