import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  constructor() { }
  // EL INTERCEPTOR DE CLASE SE IMPLEMENTA EN EL USINGCLASS DEL app.module.ts
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let valorRq = request.clone(
      {
        // CARGA DE DATOS PARA EL HEADER DE UNA PETICIÓN
        setHeaders: {
          Authorization: 'token' // AQUÍ SE IMPLEMENTAN JWT NORMAR O BEARER (CON PREFIJO)
        },
        // CARGA DE DATOS EN EL BODY PARA TODAS LAS PETICIONES
        body: {
          // ...request : representa al body original, garantiza que la 
          // información original se mantenga y no sea sustituida
          ...request.body,
          Ip: '0.0.0.0',
          Usuario: localStorage.getItem('userLoger') == null 
          ? 'ULog'
          : localStorage.getItem('userLoger')

        }
      }
    );
    console.log('Interceptor funcionando')
    return next.handle(valorRq);
  }
}
