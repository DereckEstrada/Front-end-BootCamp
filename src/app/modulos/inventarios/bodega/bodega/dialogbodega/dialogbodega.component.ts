import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { BodegaModel } from 'src/app/models/bodega.model';
import { FindSucursalComponent } from 'src/app/shared/findSucursal/findSucursal.component';

@Component({
  selector: 'app-dialogbodega',
  templateUrl: './dialogbodega.component.html',
  styles: ``
})
export class DialogBodegaComponent {

  @ViewChild(Dialog) dialogoGenerico: Dialog;
  @ViewChild(FindSucursalComponent) sucursalComponent: FindSucursalComponent;
  @Output() bodegaEmitter = new EventEmitter<any>();
  
  bodega: BodegaModel = new BodegaModel();
  visible: boolean = false;
  
  statuses: any[] = [
    { label: 'Activo', value: '1' },
    { label: 'Inactivo', value: '2' }
  ];

  constructor(private messageService: MessageService) {}

  abrir() {
    this.visible = true;
  }

  cerrar() {
    this.visible = false;
  }

  enviarBodega(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Formulario inválido. Revise los campos.' });
      return;
    }

    this.bodegaEmitter.emit(this.bodega);
    
    this.unTouchedControls(form);
    this.visible=false;
    this.bodega = new BodegaModel();
  }

  unTouchedControls(form: NgForm) {
    Object.values(form.controls).forEach(control => control.markAsUntouched());
  }

  mostrarSucursal() {
    this.sucursalComponent.mostrarFindSucursal = true;
  }
  
  almacenarSucursal(sucursal: any) {
    this.bodega.sucursalId = sucursal.sucursalId;
    this.bodega.sucursalDescripcion = sucursal.sucursalNombre;
  }

  cancelarBodega(form: NgForm) {
    this.visible = false;
    Object.values(form.controls).forEach(control => control.markAsUntouched());
    this.bodega = new BodegaModel(); 
  }
  
    
}
