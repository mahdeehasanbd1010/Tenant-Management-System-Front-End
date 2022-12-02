import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HomeownerModel} from "../../../models/homeowner-model/homeowner.model";

@Injectable({
  providedIn: 'root'
})
export class HomeownerProfileService {

  constructor(private http:HttpClient) { }

  public getHomeownerInfo(homeownerUserName: string):Observable<any>{
    return this.http.get(environment.baseUrl+'homeownerAuth/getHomeowner/'+ homeownerUserName);
  }
  public updateHomeownerInfo(homeownerUserName: string, updatedHomeowner: HomeownerModel):Observable<any>{
    return this.http.post(environment.baseUrl+'homeownerAuth/updateHomeowner/' + homeownerUserName, updatedHomeowner);
  }
}
