import { Injectable } from '@angular/core';
import {HouseModel} from "../../models/house.model";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HouseIndexService {

  constructor(private http:HttpClient) { }

  public getAllHouseInfo(homeownerUserName: string):Observable<any>{
    return this.http.get(environment.baseUrl+'house/getAllHouse/'+ homeownerUserName);
  }
}
