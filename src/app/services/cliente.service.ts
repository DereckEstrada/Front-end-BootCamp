import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _http=inject(HttpClient);
  private urlCliente=environment.vmtDevApiUrl+environment.pathRestCliente;
  getCliente(requestCliente:RequestModel){
    return this._http.post(this.urlCliente, requestCliente);
  }
  mantenimientoCliente(requestCliente:RequestModel){
    return this._http.post(this.urlCliente, requestCliente);
  }
}
