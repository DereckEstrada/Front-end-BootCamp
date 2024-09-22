import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { ProveedorModel } from 'src/app/models/proveedor.model';
import { FindCiudadComponent } from 'src/app/shared/findCiudad/findCiudad.component';

@Component({
  selector: 'app-dialogProveedor',
  templateUrl: './dialogProveedor.component.html',
  styles: ``
})
export class dialogProveedorComponent {
  @ViewChild(Dialog) dialogoGenerico: DynamicDialogComponent;
  @ViewChild(FindCiudadComponent) ciudadComponente: FindCiudadComponent;

  @Output() proveedorEmitter=new EventEmitter<ProveedorModel>();

  private messageService=inject(MessageService)

  proveedor:ProveedorModel=new ProveedorModel();
  visible: boolean = false;

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
  constructor(){
  }
  enviarProveedor(form:NgForm){
    console.log(this.proveedor)
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>controls.markAsTouched());
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Hay campos invalidos'});      
      return;
    }
    this.proveedorEmitter.emit(this.proveedor);
    this.unTouchedControls(form);
    this.proveedor=new ProveedorModel();
  }
  cancelarProveedor(form:NgForm){
    this.visible=false;
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
    this.proveedor=new ProveedorModel();
  }  
  unTouchedControls(form: NgForm){
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
  }
  mostrarCiudad() {
    this.ciudadComponente.mostrarFindCiudad = true;
  }
  almacenarCiudad(ciudad:CiudadModel){
    this.proveedor.ciudadId=ciudad.ciudadId;
    this.proveedor.ciudadDescripcion=ciudad.ciudadNombre;
  }
}
