import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stock', 
    loadChildren: () => import('./stock/stock.module').then( m => m.StockModule)
   },
   { path: 'ventas', 
    loadChildren: () => import('./puntoventa/puntoventa.component').then( m => m.PuntoventaComponent)
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
