import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TenantDetailsService {

  constructor(private http:HttpClient) { }

  public getTenantRegistrationForm(tenantUserName: string):Observable<any>{
    return this.http.get(environment.baseUrl+'tenantRegistrationForm/getTenantInfo/' + tenantUserName);
  }
  public downloadRegistrationForm(tenantUserName: string){
    return this.http.get(environment.baseUrl+'pdfCreator/' + tenantUserName,
      {observe:'response', responseType:'blob'});
  }
}
