import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { CiudadModel } from 'src/app/models/ciudad.model';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { FindCiudadComponent } from 'src/app/shared/findCiudad/findCiudad.component';

@Component({
  selector: 'app-dialogEmpresa',
  templateUrl: './dialogEmpresa.component.html',
  styles: ``
})
export class dialogEmpresaComponent  {
  @ViewChild(Dialog) dialogoGenerico: DynamicDialogComponent;
  @ViewChild(FindCiudadComponent) ciudadComponente: FindCiudadComponent;
  @Output() empresaEmitter=new EventEmitter<EmpresaModel>();

  private messageService=inject(MessageService)

  empresa:EmpresaModel=new EmpresaModel();
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
  enviarEmpresa(form:NgForm){  
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>controls.markAsTouched());
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Hay campos invalidos'});      
      return;
    }
    this.empresaEmitter.emit(this.empresa);
    this.unTouchedControls(form);
    this.empresa=new EmpresaModel();
  }
  cancelarEmpresa(form:NgForm){
    this.visible=false;
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
    this.empresa=new EmpresaModel();
  }  
  unTouchedControls(form: NgForm){
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
  }
  mostrarCiudad() {
    this.ciudadComponente.mostrarFindCiudad = true;
  }
  almacenarCiudad(ciudad:CiudadModel){
    this.empresa.ciudadId=ciudad.ciudadId;
    this.empresa.ciudadDescripcion=ciudad.ciudadNombre;
  }
}
