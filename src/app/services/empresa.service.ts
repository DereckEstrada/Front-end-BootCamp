import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor( private httpClient: HttpClient) { }

  urlEmpresa: string = environment.vmtDevApiUrl+environment.pathRestEmpresa;

  getEmpresa( requestEmpresa: RequestModel ) : Observable<any> {    
    return this.httpClient.post( this.urlEmpresa, requestEmpresa );
  }

  mantenimientoEmpresa(requestEmpresa: RequestModel){
    return this.httpClient.post( this.urlEmpresa, requestEmpresa );
  }
}
