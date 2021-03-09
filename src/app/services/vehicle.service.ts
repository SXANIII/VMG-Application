import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // Perform a get request on given URL string and return result as any to be consumed
  readonly APIUrl = "https://capitalauto.co.za/api/v3/view_stock_complete_with_data?company_id=eq.635"

  constructor(private http : HttpClient) { }

  getVehicleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
}
