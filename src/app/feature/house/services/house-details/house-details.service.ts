import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HouseModel} from "../../models/house.model";

@Injectable({
  providedIn: 'root'
})
export class HouseDetailsService {

  constructor(private http:HttpClient) { }

  public getHouseDetailsInfo(homeownerUserName: string, houseId: string):Observable<any>{
    return this.http.get(environment.baseUrl+'house/getHouseDetailsInfo/' + homeownerUserName
      + '/' + houseId);
  }

  public updateHouseDetailsInfo(homeownerUserName: string, houseId: string, updatedHouse: HouseModel): Observable<any>{
    return this.http.post(environment.baseUrl+'house/updateHouseDetailsInfo/' + homeownerUserName
      + '/' + houseId, updatedHouse);
  }

}
