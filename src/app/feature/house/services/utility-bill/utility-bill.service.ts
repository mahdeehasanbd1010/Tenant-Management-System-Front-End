import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilityBillModel} from "../../models/utility-bill.model";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilityBillService {

  constructor(private http:HttpClient) { }

  public getUtilityBillList(homeownerUserName: string, houseId: string, flatId: string):Observable<any>{
    return this.http.get(environment.baseUrl+'house/flat/getUtilityBillList/' + homeownerUserName + '/' + houseId
      + '/' + flatId);
  }
}
