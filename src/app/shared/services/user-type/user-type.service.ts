import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private router: Router) { }

  isHomeowner(){
    let userType: string = localStorage.getItem('userType') as string;
    if(userType === "Homeowner"){
      return true;
    }
    return false;
  }

  isTenant(){
    let userType: string = localStorage.getItem('userType') as string;
    if(userType === "Tenant"){
      return true;
    }
    return false;
  }
}
