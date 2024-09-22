import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogBodegaComponent } from './dialogbodega/dialogbodega.component';
import { BodegaService } from 'src/app/services/bodega.service';
import { BodegaModel } from 'src/app/models/bodega.model';
import { RequestModel } from 'src/app/models/request.model';
import { DataQueryModel } from 'src/app/models/dataQuery.model';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  providers: [MessageService, ConfirmationService]
})
export class BodegaComponent implements OnInit, AfterViewInit {

  @ViewChild(DialogBodegaComponent) dialogoBodega: DialogBodegaComponent;
  private _serviceBodega = inject(BodegaService);

  bodegasList: BodegaModel[] = [];
  bodega: BodegaModel = new BodegaModel();
  operacion: string = '';
  loading: boolean = true;
  messageNotificate: string = '';
  search:string='';
  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  constructor(public layoutService: LayoutService, private messageService: MessageService) { }

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  ngAfterViewInit(): void {
    let dataQuery: DataQueryModel = {
      "OpcionData": "all"
    }
    let requestGetBodega: RequestModel = {
      Usuario: 'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: "GET",
      Data: dataQuery
    };
    this.cargaDatosLocal(requestGetBodega);
  }

  cargaDatosLocal(request: RequestModel) {
    this._serviceBodega.getBodega(request).subscribe({
      next: resp => {
        if (resp["code"] == 200) {
          this.bodegasList = resp['data'];
          this.loading=false;
        }
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar bodegas' });
      }
    });
  }

  dialogNuevaBodega() {
    this.operacion = 'POST';
    this.messageNotificate = 'Guardado Correctamente';
    this.dialogoBodega.visible = true;
  }

  mantenimientoBodega() {
    let request: RequestModel = {
      Usuario: 'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: this.operacion,
      Data: this.bodega
    };

    this._serviceBodega.mantenimientoBodega(request).subscribe({
      next: resp => {
        if (resp['code'] == 200) {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: this.messageNotificate });
          this.dialogoBodega.visible = false;
          this.ngAfterViewInit();
        }
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error en la operación' });
      }
    });
  }

  guardarBodega(bodega: BodegaModel) {
    this.bodega = bodega;
    this.mantenimientoBodega();
  }

  actualizarBodega(bodega: BodegaModel) {
    this.operacion = 'PUT';
    this.messageNotificate = 'Actualizado Correctamente';
    this.dialogoBodega.visible = true;
    this.dialogoBodega.bodega = bodega;
  }

  deleteBodega(bodega: BodegaModel) {
    this.operacion = 'DELETE';
    this.messageNotificate = 'Eliminado Correctamente';
    this.bodega = bodega;
    this.mantenimientoBodega();
  }

  filtrarBodega() {
    console.log(this.search)
    let dataQuery: DataQueryModel = {
      OpcionData: 'nombre',
      DataFirstQuery:this.search
    };
    console.log("assssss"+dataQuery.DataFirstQuery)
    let request: RequestModel = {
      Usuario: 'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: 'GET',
      Data: dataQuery
    };

    this._serviceBodega.getBodega(request).subscribe({
      next: resp => {
          this.bodegasList = resp['data'];
        
      },
      error: err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al filtrar bodegas' });
      }
    });
  }
}
