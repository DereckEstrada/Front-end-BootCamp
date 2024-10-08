import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DynamicDialogComponent } from 'primeng/dynamicdialog';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogcliente.component.html',
  styles: ``
})
export class DialogclienteComponent {
  @ViewChild(Dialog) dialogoGenerico: DynamicDialogComponent;
  @Output() clienteEmitter=new EventEmitter<ClienteModel>();

  private messageService=inject(MessageService)

  cliente:ClienteModel=new ClienteModel();
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
  constructor(){
  }
  enviarCliente(form:NgForm){
    console.log(this.cliente)
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>controls.markAsTouched());
      this.messageService.add({severity:'error', summary:'Notificación VMTDev Bootcamp', detail:'Hay campos invalidos'});      
      return;
    }
    this.clienteEmitter.emit(this.cliente);
    this.unTouchedControls(form);
    this.cliente=new ClienteModel();
  }
  cancelarCliente(form:NgForm){
    this.visibleClient=false;
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
    this.cliente=new ClienteModel();
  }  
  unTouchedControls(form: NgForm){
    Object.values(form.controls).forEach(controls=>controls.markAsUntouched());
  }
}
