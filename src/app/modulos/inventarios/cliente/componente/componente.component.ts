import { ClienteModel } from './../../../../models/cliente.model';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ComponenteComponent implements OnInit{
  @ViewChild('dialogCliente') dialogCliente!:DialogclienteComponent;
  private _serviceCliente=inject(ClienteService);
  private messageService=inject(MessageService)
  message:string='';
  operacion:string='';
  clienteList:ClienteModel[]=[];
  loading: boolean = false;
  cliente:ClienteModel=new ClienteModel();
  search: string = '';
  ngOnInit(): void {
    this.operacion='GET';
    let request=this.createRequest(this.createDataQuery('all',''));
    this.cargaDatosLocal(request);
  }
  cargaDatosLocal(request:RequestModel){
    this._serviceCliente.getCliente(request).subscribe({
      next:resp=>{
        if(resp["code"]==200){
          this.clienteList=resp['data']
        }
      }
    });
  }  
  openCreateCliente(){
    this.dialogCliente.visibleClient=true;
    this.message='Cliente creado correctamente';
    this.operacion='POST';
  }
  openUpdateCliente(cliente:ClienteModel){
   this.dialogCliente.visibleClient=true;
   this.dialogCliente.cliente=cliente;
      this.message='Cliente actualizado correctamente';
      this.operacion='PUT';
  }
  delelteCliente(cliente:ClienteModel){
    this.cliente=cliente;
    this.message='Cliente eliminado correctamente';
    this.operacion='DELETE';
    this.mantenimientoCliente();
  }
  mantenimientoCliente(){
    let request=this.createRequest(this.cliente);
    this._serviceCliente.mantenimientoCliente(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.messageService.add({severity:'success', summary:'Notificación VMTDev Bootcamp', detail:this.message});      
          this.dialogCliente.visibleClient = false;
          this.ngOnInit();
        }
      }
    })
  } 
  guardarCliente(cliente:ClienteModel){
    this.cliente=cliente;
    this.mantenimientoCliente();
  } 
createDataQuery(peticion:string, valor:string):DataQueryModel{
  let dataQuery:DataQueryModel={
    OpcionData:peticion,
    DataFirstQuery:valor
  };
  return dataQuery;
}

createRequest(data:any):RequestModel{
  let request:RequestModel={
    Usuario:'',
    Ip:'00',
    Modulo:1,
    Operacion:this.operacion,
    Data:data
  };
  return request;
}

buscarCliente(){
  this.operacion='GET';
  let request=this.createRequest(this.createDataQuery('ruc',this.search));
  console.log(this.search);
  this._serviceCliente.getCliente(request).subscribe({
    next:resp=>this.clienteList=resp['data']
  })
}


}
