import { FindBodegaComponent } from './../../../../shared/findBodega/findBodega.component';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { BodegaModel } from 'src/app/models/bodega.model';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProveedorModel } from 'src/app/models/proveedor.model';
import { StockModel } from 'src/app/models/stock.model';
import { SucursalModel } from 'src/app/models/sucursal.model';
import { FindempresaComponent } from 'src/app/shared/findempresa/findempresa.component';
import { FindProductoComponent } from 'src/app/shared/findProducto/findProducto.component';
import { FindSucursalComponent } from 'src/app/shared/findSucursal/findSucursal.component';

@Component({
  selector: 'app-dialogRegistrarStockcliente',
  templateUrl: './dialogRegistrarStock.component.html',
  styles: ``,
  providers:[MessageService]
})
export class dialogRegistrarStockComponent {

  
  @ViewChild(Dialog) dialogoGenerico: Dialog;
  
  
  @ViewChild(FindempresaComponent) empresaComponet: FindempresaComponent;
  
  @ViewChild(FindBodegaComponent) bodegaComponent:FindBodegaComponent;

  @ViewChild(FindSucursalComponent) sucursalComponent:FindSucursalComponent;
  
  @ViewChild(FindProductoComponent) productoComponent:FindProductoComponent;
  
  @Output() stockEmitter = new EventEmitter<any>();
  @Input() listStock:StockModel[]=[];

  stock:StockModel=new StockModel();
  
  visible: boolean = false;
  
  constructor(private messageService:MessageService) {}

  mostrarSucursal() {
    this.sucursalComponent.mostrarFindSucursal = true;
  }

  mostrarEmpresa() {
    this.empresaComponet.mostrarFindEmpresas = true;
  }
  
  mostratBodega(){
    this.bodegaComponent.mostrarFindBodega=true;
  }
  mostrarProducto(){
    this.productoComponent.mostrarFindProducto=true;
  }
  almacenarSucursal(sucursal:SucursalModel){
    this.stock.sucursalId=sucursal.sucursalId;
    this.stock.sucursalDescripcion=sucursal.sucursalNombre;
  }
  almacenarEmpresa(empresa:EmpresaModel){
    this.stock.empresaId=empresa.empresaId;
    this.stock.empresaDescripcion=empresa.empresaNombre;
  }
  almacenarBodega(bodega:BodegaModel){
    this.stock.bodegaId=bodega.bodegaId;
    this.stock.bodegaDescripcion=bodega.bodegaNombre;
  }
  almacenarProducto(producto:ProductoModel){
    this.stock.prodId=producto.prodId;
    this.stock.prodDescripcion=producto.prodDescripcion;
  }
  enviarstock(form:NgForm){
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>controls.markAsTouched());
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Hay campos invalidos'});      
      return;
    }
    let comprobarExist=this.listStock.filter(stockDB=>stockDB.bodegaId==this.stock.bodegaId 
      &&stockDB.empresaId==this.stock.empresaId && stockDB.sucursalId==this.stock.sucursalId 
      && stockDB.prodId==this.stock.prodId);
    if(comprobarExist.length!=0){
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Ya hay en registro con estas descripciones'});      
    }else{
      this.stockEmitter.emit(this.stock);
      this.unTouchedControls(form);
      this.stock=new StockModel();
      this.visible=false;
    }
  }
  cancelarstock(form:NgForm){
    this.visible=false;
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
    this.stock=new StockModel();
  }  
  unTouchedControls(form: NgForm){
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
  }
}
