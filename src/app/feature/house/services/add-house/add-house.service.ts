import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HouseModel} from "../../models/house.model";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddHouseService {

  constructor(private http: HttpClient) { }

  public addHouse(newHouse: HouseModel):Observable<any>{
    return this.http.post(environment.baseUrl+'house/addHouse', newHouse);
  }
}
