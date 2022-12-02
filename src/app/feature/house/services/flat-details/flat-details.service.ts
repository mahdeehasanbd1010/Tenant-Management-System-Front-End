import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {FlatModel} from "../../models/flat.model";

@Injectable({
  providedIn: 'root'
})
export class FlatDetailsService {

  constructor(private http:HttpClient) { }

  public getFlatInfo(homeownerUserName: string, houseId: string, flatId: string):Observable<any>{
    return this.http.get(environment.baseUrl+'house/getFlat/' + homeownerUserName + '/' + houseId + '/' + flatId);
  }

  public updateFlatInfo(flatId: string, updatedFlat: FlatModel):Observable<any>{
    return this.http.post(environment.baseUrl+'house/updateFlat/' + flatId, updatedFlat);
  }
}
