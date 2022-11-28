import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HouseDetailsService {

  constructor(private http:HttpClient) { }

  public getAllFlatInfo(homeownerUserName: string, houseId: string):Observable<any>{
    return this.http.get(environment.baseUrl+'house/getAllFlat/' + homeownerUserName + '/' + houseId);
  }
}
