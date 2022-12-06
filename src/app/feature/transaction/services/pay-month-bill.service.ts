import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TransactionModel} from "../models/transaction/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class PayMonthBillService {

  constructor(private http: HttpClient) { }

  getTenantInfo(tenantUsername: any): Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getTenantByUsername/' + tenantUsername);
  }

  getMonthlyBill(tenantUsername: any): Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getMonthlyBill/' + tenantUsername);
  }

  saveTransaction(transaction: TransactionModel): Observable<any>{
    console.log(transaction);
    return this.http.post(environment.baseUrl+'tenantAuth/saveTransaction',transaction);
  }

  getTransactionListForTenant(tenantUsername: any): Observable<any>{
    return this.http.get(environment.baseUrl+'tenantAuth/getTransactionForTenant/' + tenantUsername);
  }

  currentMonthPayment(tenantUsername: any){
    return this.http.get(environment.baseUrl+'tenantAuth/currentMonthPayment/'
      + tenantUsername);
  }

  downloadBillMemo(transactionId: any){
    return this.http.get(environment.baseUrl+'pdfcreator/downloadBillMemoPDF/'
      + transactionId, {observe:'response', responseType:'blob'});
  }
}
