import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CatalogoBase } from 'src/app/datasource/interface/interface.base';
import { CatalogoService } from 'src/app/services/empresacatalogo.service';

@Component({
  selector: 'app-findempresa',
  templateUrl: './findempresa.component.html',
  styles: ``,
  providers: [DialogService]
})
export class FindempresaComponent {

  constructor ( private dialogService: DialogService, private catalogoService: CatalogoService ) {}

  @Output()
  seleccionarEmpresa = new EventEmitter();

  @ViewChild('dialogEmpresa')  dialogoEmpresa: DynamicDialogRef;


  responseSimulate: any = {
    codeResp: "Ok",
    msg: 'Realizado con exito',
    data: {
        empresas: [
            {
                idEmpresa: 1,
                descripcion: 'GSM electronics'
            },
            {
                idEmpresa: 2,
                descripcion: 'Apple Inc.'
            }
        ]
    }
}

  mostrarFindEmpresas: boolean = false;

  visibleTable: boolean = false;

  empresaSeleccionada: any;

  listEmpresas: CatalogoBase[];

  empresaDefault: CatalogoBase = {
    id: '',
    valor: ''
  }

  

  findEmpresas() {
    let rqBodyEmpresas = {
      idEmpresa: this.empresaDefault.id,
      descripcionEmpresa: this.empresaDefault.valor
    }

    let rqCatalogoEmpresa= {
      operacion: 'findEmpresa',
      data: rqBodyEmpresas
    }

    this.catalogoService.findCatalogoEmpresa(rqCatalogoEmpresa).subscribe({
      next: (resp) => {
        if(resp.codeResp === 'Ok'){
          let lempresas: any[] = resp.data.empresas;
          lempresas.forEach( empresa => {

            let empresaCatalogo: CatalogoBase = {
              id: empresa.idEmpresa,
              valor: empresa.descripcion
            }
            this.listEmpresas.push(empresaCatalogo);
          })
        }
      },
      error: (error) => {
        alert(error);
      }

    });

  }

  seleccionarCerrar() {
    this.seleccionarEmpresa.emit();
  }
}
