import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogComponent } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialogingresostock',
  templateUrl: './dialogingresostock.component.html',
  styles: ``,
  providers:[DialogService]
})
export class DialogingresostockComponent {
  @Input() producto: any;
  @Output() guardarStock=new EventEmitter<any>();
  @ViewChild('dialogStock') dialogStock!:DynamicDialogComponent;

  private _dynamicDialog=inject(DialogService)
  visible: boolean = false;
  

}
