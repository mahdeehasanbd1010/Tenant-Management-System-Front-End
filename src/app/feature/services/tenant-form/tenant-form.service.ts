import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TenantFormService {

  constructor(private http: HttpClient) { }

  saveTenantInformation(tenantForm: any): Observable<any>{
    return this.http.post(environment.baseUrl+'tenantRegistrationForm/save', tenantForm);
  }
}
