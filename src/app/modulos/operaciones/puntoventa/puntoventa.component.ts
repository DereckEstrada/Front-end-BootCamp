import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-puntoventa',
  standalone: true,
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputGroupModule
  ],
  templateUrl: './puntoventa.component.html',
  styles: ``
})
export class PuntoventaComponent {
texto: string;
productos: any[];
loading: boolean = false;
cliente : any;
}
