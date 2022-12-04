import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RentRequestService {

  constructor(private http:HttpClient) { }

  public getRentRequestList(homeownerUsername: string):Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getRentRequestList/' + homeownerUsername);
  }

  public acceptRentRequest(homeownerUsername: string, tenantUsername: string, houseId: string, flatId: string):Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/acceptRentRequest/' +
      homeownerUsername + '/' + tenantUsername + '/' + houseId + '/' + flatId);
  }

  public rejectRentRequest(homeownerUsername: string, tenantUsername: string, houseId: string, flatId: string):Observable<any>{
    return this.http.delete(environment.baseUrl+'tenantAuth/deleteRentRequest/' +
      homeownerUsername + '/' + tenantUsername + '/' + houseId + '/' + flatId);
  }
}
