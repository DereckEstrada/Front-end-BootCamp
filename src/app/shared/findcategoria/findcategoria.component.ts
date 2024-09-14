import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { categoriaCatalogo } from 'src/app/datasource/catalogos/catalogos';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-findcategoria',
  templateUrl: './findcategoria.component.html',
  providers: [DialogService, MessageService]
})
export class FindcategoriaComponent {


  constructor(private dialogService: DialogService, private messageService: MessageService){}
  @ViewChild('dialogoCategoria')  dialogoCategoria: DynamicDialogRef;

  @Output()
  seleccionarCategoria = new EventEmitter();

  mostrarCategorias: boolean = false;

  dataCategoria: any;

  categoriaSeleccionada: any;

  visibleTable: boolean = false;

  findCategorias() {
    setTimeout(() => {
      this.dataCategoria = categoriaCatalogo;
      this.visibleTable = true;
    },
    2000)
  }

  seleccionarCerrar() {
    this.seleccionarCategoria.emit();
  }

}
