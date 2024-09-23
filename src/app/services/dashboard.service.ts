import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RequestModel } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _http=inject(HttpClient);
  private urlDashboard=environment.vmtDevApiUrl+environment.pathDashboard;
  private urlVentasMensuales=environment.vmtDevApiUrl+environment.pathDashboardVentasMensuales;
  getDashboard(requestDashboard:RequestModel){
    return this._http.post(this.urlDashboard, requestDashboard);
  }
  getVentasMensuales(requestDashboard:RequestModel){
    return this._http.post(this.urlVentasMensuales, requestDashboard);
  }
}
