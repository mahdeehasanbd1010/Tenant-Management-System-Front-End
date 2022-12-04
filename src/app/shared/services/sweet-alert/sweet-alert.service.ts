import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  sweetAlert(title: string, html: string, icon: any, url: string){
    Swal.fire(title, html, icon).then((response: any)=>{
      if(response){
        window.location.assign(url);
      }
    }).catch((error: any)=>{
      alert(error.message);
      console.log(error);
    });
  }
}
