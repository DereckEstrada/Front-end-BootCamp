import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogcliente.component.html',
  styles: ``
})
export class DialogclienteComponent {

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

}
