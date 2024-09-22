import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private _http=inject(HttpClient);
  private urlCiudad=environment.vmtDevApiUrl+environment.pathRestCiudad;
  getCiudad(requestCiudad:RequestModel){
    return this._http.post(this.urlCiudad, requestCiudad);
  }
  mantenimientoCiudad(requestCiudad:RequestModel){
    return this._http.post(this.urlCiudad, requestCiudad);
  }
}
