import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {FlatModel} from "../../models/flat.model";

@Injectable({
  providedIn: 'root'
})
export class AddFlatService {

  constructor(private http: HttpClient) { }

  public addFlat(newFlat: FlatModel):Observable<any>{
    return this.http.post(environment.baseUrl+'house/addFlat', newFlat);
  }
}
