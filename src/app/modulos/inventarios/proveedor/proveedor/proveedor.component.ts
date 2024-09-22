import { ProveedorModel } from './../../../../models/proveedor.model';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { dialogProveedorComponent } from './dialogProveedor/dialogProveedor.component';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ProveedorComponent implements OnInit{
  @ViewChild('dialogProveedor') dialogProveedor!:dialogProveedorComponent;
  private _serviceProveedor=inject(ProveedorService);
  private messageService=inject(MessageService)
  message:string='';
  operacion:string='';
  proveedorList:ProveedorModel[]=[];
  loading: boolean = false;
  proveedor:ProveedorModel=new ProveedorModel();
  search: string = '';
  ngOnInit(): void {
    this.operacion='GET';
    let request=this.createRequest(this.createDataQuery('all',''));
    this.cargaDatosLocal(request);
  }
  cargaDatosLocal(request:RequestModel){
    this._serviceProveedor.getProveedor(request).subscribe({
      next:resp=>{
        if(resp["code"]==200){
          this.proveedorList=resp['data']
        }
      }
    });
  }  
  openCreateProveedor(){
    this.dialogProveedor.visible=true;
    this.message='Proveedor creado correctamente';
    this.operacion='POST';
  }
  openUpdateProveedor(proveedor:ProveedorModel){
   this.dialogProveedor.visible=true;
   this.dialogProveedor.proveedor=proveedor;
      this.message='Proveedor actualizado correctamente';
      this.operacion='PUT';
  }
  delelteProveedor(proveedor:ProveedorModel){
    this.proveedor=proveedor;
    this.message='Proveedor eliminado correctamente';
    this.operacion='DELETE';
    this.mantenimientoProveedor();
  }
  mantenimientoProveedor(){
    let request=this.createRequest(this.proveedor);
    this._serviceProveedor.mantenimientoProveedor(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.messageService.add({severity:'success', summary:'Notificación VMTDev Bootcamp', detail:this.message});      
          this.dialogProveedor.visible = false;
          this.ngOnInit();
        }
      }
    })
  } 
  guardarProveedor(Proveedor:ProveedorModel){
    this.proveedor=Proveedor;
    this.mantenimientoProveedor();
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

buscarProveedor(){
  this.operacion='GET';
  let request=this.createRequest(this.createDataQuery('ruc',this.search));
  this._serviceProveedor.getProveedor(request).subscribe({
    next:resp=>this.proveedorList=resp['data']
  })
}

}
