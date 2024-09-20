import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private _http=inject(HttpClient);
  private urlSucursal=environment.vmtDevApiUrl+environment.pathRestSucursal;
  getSucursal(requestSucursal:RequestModel){
    return this._http.post(this.urlSucursal, requestSucursal);
  }
  mantenimientoSucursal(requestSucursal:RequestModel){
    return this._http.post(this.urlSucursal, requestSucursal);
  }
}
