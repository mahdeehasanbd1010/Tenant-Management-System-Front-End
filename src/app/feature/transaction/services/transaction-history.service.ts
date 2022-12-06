import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor(private http: HttpClient) { }

  getTransactionListForHomeowner(homeownerUsername: string, houseId: string, flatId: string): Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getTransactionForHomeowner/'
      + homeownerUsername +'/'+ houseId +'/'+ flatId);
  }
}
