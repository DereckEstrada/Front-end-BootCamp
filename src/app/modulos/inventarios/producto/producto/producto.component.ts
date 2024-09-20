import { UtilitiesRoutingModule } from './../../../../demo/components/utilities/utilities-routing.module';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogproductoComponent } from './dialogproducto/dialogproducto.component';
import { ProductosService } from 'src/app/services/productos.service';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { RequestModel } from 'src/app/models/request.model';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-componente',
  templateUrl: './producto.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ProductoComponent implements OnInit, AfterViewInit {
  @ViewChild(DialogproductoComponent) dialogoCliente: DialogproductoComponent;
  private _serviceProducto=inject(ProductosService);

  constructor(public layoutService: LayoutService,private messageService: MessageService) { }
  
  productosList: ProductoModel[] = [];
  producto:ProductoModel=new ProductoModel();
  operacion:string='';
  loading: boolean = true;
  messageNotificate:string=''
  activityValues: number[] = [0, 100];


  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let dataQuery:DataQueryModel = {
      "OpcionData": "all"
    }
    let requestGetProducto: RequestModel = {
      Usuario: 'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: "GET",
      Data: dataQuery
    }
    this.cargaDatosLocal(requestGetProducto);
    
  }

  cargaDatosLocal(request:RequestModel){
    this._serviceProducto.getProductos(request).subscribe({
      next:resp=>{
        if(resp["code"]==200){
          this.productosList=resp['data']
        }
      }
    });
  }
  dialogNuevoCliente() {
    this.operacion='POST';
    this.messageNotificate='Guardado Correctamente';
    this.dialogoCliente.visibleClient = true;
  }
  mantenimientoProducto() {        
    let request:RequestModel={
      Usuario:'',
      Ip:'00',
      Modulo:1,
      Operacion:this.operacion,
      Data:this.producto
    }
    this._serviceProducto.mantenimientoProductos(request).subscribe({
      next:resp=>{
        if(resp['code']==200){          
          this.messageService.add({severity:'success', summary:'Notificación VMTDev Bootcamp', detail:this.messageNotificate});      
          this.dialogoCliente.visibleClient = false;
          this.ngAfterViewInit();
        }
      }
    })        
  }

  guardarProducto(producto:ProductoModel){
    this.producto=producto;
    this.mantenimientoProducto();
  }
  
  actualizarProducto(producto: ProductoModel) {
    this.operacion='PUT';
    this.messageNotificate='Actualizado Correctamente';
    this.dialogoCliente.visibleClient = true;
    this.dialogoCliente.producto = producto;
  }

  deleteProducto(producto:ProductoModel){
    this.operacion='DELETE';
    this.messageNotificate='Eliminado Correctamente';
    this.producto=producto;
    this.mantenimientoProducto();
  }
  filtarProducto(filtro:string){
    let dataQuery:DataQueryModel={
      OpcionData:'descripcion',
      DataFirstQuery:filtro
    }
    let request:RequestModel={
      Usuario:'',
      Ip:'00',
      Modulo:1,
      Operacion:'GET',
      Data:dataQuery
    }
    this._serviceProducto.getProductos(request).subscribe({
      next:resp=>this.productosList=resp['data']
    });

  }  
}
