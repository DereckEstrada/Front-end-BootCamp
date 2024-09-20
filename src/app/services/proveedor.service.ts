import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private _http=inject(HttpClient);
  private urlProveedor=environment.vmtDevApiUrl+environment.pathRestProveedor;
  getProveedor(requestProveedor:RequestModel){
    return this._http.post(this.urlProveedor, requestProveedor);
  }
  mantenimientoProveedor(requestProveedor:RequestModel){
    return this._http.post(this.urlProveedor, requestProveedor);
  }
}
