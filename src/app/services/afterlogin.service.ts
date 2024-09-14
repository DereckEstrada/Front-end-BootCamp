import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService {

  constructor() { }
  dataAfterLogin( respLogin: any ) {
    window.localStorage.setItem('userLogin', 'Us');
    // window.localStorage.setItem('userLogin', respLogin.data[0].username ?? 'Us');
    window.localStorage.setItem('userRole',  'Rol');
    // window.localStorage.setItem('userRole', respLogin.data[0].usuName ?? 'Rol');
  }
}
