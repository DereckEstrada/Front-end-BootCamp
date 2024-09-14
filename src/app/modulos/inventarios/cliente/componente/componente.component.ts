import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ComponenteComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService, private productService: ProductService, private messageService: MessageService) {}
  loading: boolean = false;
  
  ngAfterViewInit(): void {
    
  }
  
  activityValues: number[] = [0, 100];
  
  @ViewChild('dialogoCliente') dialogoCliente: DialogclienteComponent; 
  
  clientes: any[] =  [];
  
  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];
  
  ngOnInit(): void {


    
  }



  dialogNuevoCliente(){
    this.dialogoCliente.visibleClient = true;
  }
}
