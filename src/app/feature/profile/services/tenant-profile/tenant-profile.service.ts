import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {TenantModel} from "../../../models/tenant-model/tenant.model";

@Injectable({
  providedIn: 'root'
})
export class TenantProfileService {

  constructor(private http:HttpClient) { }

  public getTenantInfo(tenantUserName: string):Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getTenantByUsername/'+ tenantUserName);
  }

  public updateTenantInfo(tenantUserName: string, updatedTenant: TenantModel):Observable<any>{
    return this.http.post(environment.baseUrl+'tenantAuth/updateTenant/' + tenantUserName,
      updatedTenant);
  }
}
