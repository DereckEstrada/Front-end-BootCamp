import { EmpresaModel } from './../../../../models/empresa.model';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { dialogEmpresaComponent } from './dialogEmpresa/dialogEmpresa.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class EmpresaComponent implements OnInit{
  @ViewChild('dialogEmpresa') dialogEmpresa!:dialogEmpresaComponent;
  private _serviceEmpresa=inject(EmpresaService);
  private messageService=inject(MessageService)
  message:string='';
  operacion:string='';
  empresaList:EmpresaModel[]=[];
  loading: boolean = false;
  empresa:EmpresaModel=new EmpresaModel();
  search: string = '';
  ngOnInit(): void {
    this.operacion='GET';
    let request=this.createRequest(this.createDataQuery('all',''));
    this.cargaDatosLocal(request);
  }
  cargaDatosLocal(request:RequestModel){
    this._serviceEmpresa.getEmpresa(request).subscribe({
      next:resp=>{
        if(resp["code"]==200){
          this.empresaList=resp['data']
        }
      }
    });
  }  
  openCreateEmpresa(){
    this.dialogEmpresa.visible=true;
    this.message='Empresa creada correctamente';
    this.operacion='POST';
  }
  openUpdateEmpresa(empresa:EmpresaModel){
   this.dialogEmpresa.visible=true;
   this.dialogEmpresa.empresa=empresa;
      this.message='Empresa actualizada correctamente';
      this.operacion='PUT';
  }
  delelteEmpresa(empresa:EmpresaModel){
    this.empresa=empresa;
    this.message='Empresa eliminada correctamente';
    this.operacion='DELETE';
    this.mantenimientoEmpresa();
  }
  mantenimientoEmpresa(){
    let request=this.createRequest(this.empresa);
    this._serviceEmpresa.mantenimientoEmpresa(request).subscribe({
      next:resp=>{
        if(resp['code']==200){
          this.messageService.add({severity:'success', summary:'Notificación VMTDev Bootcamp', detail:this.message});      
          this.dialogEmpresa.visible = false;
          this.ngOnInit();
        }
      }
    })
  } 
  guardarEmpresa(empresa:EmpresaModel){
    this.empresa=empresa;
    this.mantenimientoEmpresa();
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

buscarEmpresa(){
  this.operacion='GET';
  let request=this.createRequest(this.createDataQuery('ruc',this.search));
  console.log(this.search);
  this._serviceEmpresa.getEmpresa(request).subscribe({
    next:resp=>this.empresaList=resp['data']
  })
}


}
