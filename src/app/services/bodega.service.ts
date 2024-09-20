import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  private _http=inject(HttpClient);
  private urlBodega=environment.vmtDevApiUrl+environment.pathRestBodega;
  getBodega(requestBodega:RequestModel){
    return this._http.post(this.urlBodega, requestBodega);
  }
  mantenimientoBodega(requestBodega:RequestModel){
    return this._http.post(this.urlBodega, requestBodega);
  }
}
