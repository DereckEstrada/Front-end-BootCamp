import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private _http=inject(HttpClient);
  private urlCategoria=environment.vmtDevApiUrl+environment.pathRestCategoria
  getCategoria(requestCategoria:RequestModel){
    return this._http.post(this.urlCategoria, requestCategoria);
  }
  mantenimientoCategoria(requestCategoria:RequestModel){
    return this._http.post(this.urlCategoria, requestCategoria);
  }
}
