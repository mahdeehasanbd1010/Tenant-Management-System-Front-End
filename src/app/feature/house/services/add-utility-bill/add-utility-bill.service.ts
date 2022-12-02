import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {UtilityBillModel} from "../../models/utility-bill.model";

@Injectable({
  providedIn: 'root'
})
export class AddUtilityBillService {

  constructor(private http:HttpClient) { }

  public addUtilityBill(homeownerUserName: string, houseId: string, flatId: string, utilityBill: UtilityBillModel):Observable<any>{
    return this.http.post(environment.baseUrl+'house/flat/addUtilityBill/' + homeownerUserName + '/' + houseId
      + '/' + flatId, utilityBill);
  }
}
