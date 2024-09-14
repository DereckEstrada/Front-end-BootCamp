import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetProducto: string = environment.pathGetProductos;
  private uriGuardarProducto: string = environment.pathGetProductos;

  constructor(private httpClient: HttpClient) { }
  // Consulta: FindAll - Todos los registros de una entidad
  getProductos(rqGetProductos: any): Observable<any> {
    let urlGetProducto = this.urlBase + this.uriGetProducto;
    return this.httpClient.post(urlGetProducto, rqGetProductos);
  }

  // Mantenimiento: Guardar, actualizar y eliminar (eliminación lógica) un producto
  mantenimientoProductos(rqMantenimientoProducto: any): Observable<any> {
    let urlGuardarProducto = this.urlBase + this.uriGuardarProducto;
    return this.httpClient.post(urlGuardarProducto, rqMantenimientoProducto);
  }
}
