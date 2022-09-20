import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeownerAuthService {

  constructor(private http: HttpClient) { }

  public signUpToTheServer(homeowner: any): Observable<any>{
    return this.http.post(environment.baseUrl+'homeownerAuth/signUp', homeowner);
  }
  public loginToTheServer(loginModel: any): Observable<any>{
    return this.http.post(environment.baseUrl+'homeownerAuth/login', loginModel);
  }
}
