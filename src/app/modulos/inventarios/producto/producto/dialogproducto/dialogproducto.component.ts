import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProveedorModel } from 'src/app/models/proveedor.model';
import { FindcategoriaComponent } from 'src/app/shared/findcategoria/findcategoria.component';
import { FindempresaComponent } from 'src/app/shared/findempresa/findempresa.component';
import { FindproveedorComponent } from 'src/app/shared/findproveedor/findproveedor.component';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogproducto.component.html',
  styles: ``
})
export class DialogproductoComponent {

  
  @ViewChild(Dialog) dialogoGenerico: Dialog;
  
  @ViewChild(FindcategoriaComponent) categoriaComponente: FindcategoriaComponent;
  
  @ViewChild(FindempresaComponent) empresaComponet: FindempresaComponent;
  
  @ViewChild(FindproveedorComponent) proveedorComponent:FindproveedorComponent;
  
  @Output() productoEmitter = new EventEmitter<any>();
  
  producto:ProductoModel=new ProductoModel();
  categoria:CategoriaModel=new CategoriaModel();
  visibleClient: boolean = false;
  
  statuses: any [] = [
    {
      label: 'Activo',
      value: '1'
    },
    {
      label: 'Inactivo',
      value: '2'
    },
  ]  
  constructor(private messageService:MessageService) {}

  mostrarCateogria() {
    this.categoriaComponente.mostrarCategorias = true;
  }

  mostrarEmpresa() {
    this.empresaComponet.mostrarFindEmpresas = true;
  }

  mostratProveedor(){
    this.proveedorComponent.mostrarFindProveedor=true;
  }

  almacenarCategoria(categoria:CategoriaModel){
    this.producto.categoriaId=categoria.categoriaId;
    this.producto.categoriaDesripcion=categoria.categoriaDescrip;
  }
  almacenarEmpresa(empresa:EmpresaModel){
    this.producto.empresaId=empresa.empresaId;
    this.producto.empresaDescripcion=empresa.empresaNombre;
  }
  almacenarProveedor(proveedor:ProveedorModel){
    this.producto.proveedorId=proveedor.provId;
    this.producto.proveedorDescripcion=proveedor.provNomComercial;
  }
  enviarProducto(form:NgForm){
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>controls.markAsTouched());
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Hay campos invalidos'});      
      return;
    }
    this.productoEmitter.emit(this.producto);
    this.unTouchedControls(form);
    this.producto=new ProductoModel();
  }
  cancelarProducto(form:NgForm){
    this.visibleClient=false;
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
    this.producto=new ProductoModel();
  }  
  unTouchedControls(form: NgForm){
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
  }
}
