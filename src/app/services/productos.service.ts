import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlProducto: string = environment.vmtDevApiUrl+environment.pathRestProductos;
  

  constructor(private httpClient: HttpClient) { }
  // Consulta: FindAll - Todos los registros de una entidad
  getProductos(requestProducto: any): Observable<any> {
    return this.httpClient.post(this.urlProducto, requestProducto);
  }

  // Mantenimiento: Guardar, actualizar y eliminar (eliminación lógica) un producto
  mantenimientoProductos(requestProducto: any): Observable<any> {
    return this.httpClient.post(this.urlProducto, requestProducto);
  }
}
