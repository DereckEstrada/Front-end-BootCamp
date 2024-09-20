import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private _http=inject(HttpClient);
  private urlStock=environment.vmtDevApiUrl+environment.pathRestStock;
  getStock(requestStock:RequestModel){
    return this._http.post(this.urlStock, requestStock);
  }
  mantenimientoStock(requestStock:RequestModel){
    return this._http.post(this.urlStock, requestStock);
  }
}

