import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { TableModule } from 'primeng/table';
import { ComponenteComponent } from './componente/componente.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { DialogclienteComponent } from './componente/dialogcliente/dialogcliente.component';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    ComponenteComponent,
	DialogclienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
		FormsModule,
		TableModule,
		ButtonModule,
		InputTextModule,
		DropdownModule,
		ToastModule,
		DialogModule,
		CalendarModule,
		DividerModule
  ]
})
export class ClienteModule { }
