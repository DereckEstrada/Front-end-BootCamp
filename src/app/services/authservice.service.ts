import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor( private httpClient : HttpClient ) { }

  urlBase: string = environment.vmtDevApiUrl;
  pathLogin: string = environment.pathAutetication;

  login(dataLogin: any): Observable<any> {
    let urlLogin = this.urlBase + this.pathLogin;
    return this.httpClient.post( urlLogin, dataLogin );
  }
  
}
