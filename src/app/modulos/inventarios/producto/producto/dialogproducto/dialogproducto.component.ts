import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { AccionApi } from 'src/app/datasource/accionapienum';
import { FindcategoriaComponent } from 'src/app/shared/findcategoria/findcategoria.component';
import { FindempresaComponent } from 'src/app/shared/findempresa/findempresa.component';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogproducto.component.html',
  styles: ``
})
export class DialogproductoComponent {

  constructor(private changeDetector: ChangeDetectorRef) {}

  @ViewChild(Dialog) dialogoGenerico: Dialog;

  @ViewChild(FindcategoriaComponent) categoriaComponente: FindcategoriaComponent;

  @ViewChild(FindempresaComponent) empresaComponet: FindempresaComponent;

  @Input()
  registro: any;

  @Output() 
  datosProducto = new EventEmitter<any>();

  esNuevo: boolean;
  dataGuardar: any;

  idProducto: any = null;
  nombre: string;
  precio: number;
  categoria: any;
  empresa: string;
  proveedor: string;
  estatus: any;

  categoriaData: any;
  empresaData: any;

  visibleClient: boolean = false;

  statuses: any [] = [
    {
      label: 'Activo',
      value: 'activo'
    },
    {
      label: 'Inactivo',
      value: 'inactivo'
    },
  ]

  guardar() {
    this.dataGuardar = this.regDataBase(AccionApi.GUARDAR);
    this.datosProducto.emit(this.dataGuardar);
  }

  abrir() {
      this.idProducto = null;
      this.nombre = '';
      this.precio = 0.00;
      this.categoria = '';
      this.empresa = '';
      this.proveedor = '';
      this.estatus = '';
  }

  actualizar() {
    this.dataGuardar = this.regDataBase(AccionApi.ACTUALIZAR);
    this.datosProducto.emit(this.dataGuardar);
  }

  regDataBase(accionApi: AccionApi) {
    let dataGuardar = {
      accion: accionApi,
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoriaData,
      empresa: this.empresa,
      proveedor: this.proveedor,
      estatus: this.estatus.value
    }
    return dataGuardar;
  }

  mostrarCateogria() {
    this.categoriaComponente.mostrarCategorias = true;
  }

  mostrarEmpresa() {
    this.empresaComponet.mostrarFindEmpresas = true;
  }

  fijarCategoria() {
    this.categoria = this.categoriaComponente.categoriaSeleccionada.valor;
    this.categoriaData = this.categoriaComponente.categoriaSeleccionada;
    this.categoriaComponente.dialogoCategoria.close(this.categoria);
    this.changeDetector.detectChanges();
  }

  fijarEmpresa() {
    this.empresa = this.empresaComponet.empresaSeleccionada.id;
    this.empresaData = this.empresaComponet.empresaSeleccionada;
    this.empresaComponet.dialogoEmpresa.close();
    this.changeDetector.detectChanges();
  }
  

}
