import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TenantAuthService {

  constructor(private http: HttpClient) { }

  public signUpToTheServer(homeowner: any): Observable<any>{
    return this.http.post(environment.baseUrl+'tenantAuth/signUp', homeowner);
  }
  public loginToTheServer(loginModel: any): Observable<any>{
    return this.http.post(environment.baseUrl+'tenantAuth/login', loginModel);
  }

  getTenantInformation(tenantUsername: any): Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getTenantByUsername/' + tenantUsername);
  }

}
