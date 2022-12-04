import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {TenantAuthService} from "../../../feature/services/tenant-auth/tenant-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticateUser: boolean = false;
  userIcon: any = "";
  userDetails: any = null;
  userType: any = null;
  isAuthenticateTenant: boolean = false;

  constructor(private authService: AuthService,
              private tenantAuthService: TenantAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticateUser = this.authService.isAuthenticatedUser();
    this.userDetails = JSON.parse(localStorage.getItem("userDetails") as string);
    this.userType = localStorage.getItem("userType") as string;

    console.log(this.userType);

    if(this.isAuthenticateUser){
      this.userIcon =  this.processingUserIconText(this.userDetails.FullName);
    }

    this.checkTenantFormFillUp();
    this.checkValidTenant();
  }

  checkTenantFormFillUp(){
    if(this.userType == "Tenant"){
      if(!window.location.href.includes("tenant/tenant-form")){
        this.tenantAuthService.getTenantInformation(this.userDetails.UserName).subscribe({
          next: (response: any) => {
            if(response){
              if(!response.IsTenantFormFillUp){
                this.router.navigate(["tenant/tenant-form"]);
              }
            }
          },
          error: (error: any) =>{
            alert(error.message);
            console.log(error);
          }
        });
      }else {
        this.tenantAuthService.getTenantInformation(this.userDetails.UserName).subscribe({
          next: (response: any) => {
            if(response){
              if(response.IsTenantFormFillUp){
                this.router.navigate([""]);
              }
            }
          },
          error: (error: any) =>{
            alert(error.message);
            console.log(error);
          }
        });
      }
    }
  }

  checkValidTenant(){
    if(this.userType == "Tenant"){
      this.tenantAuthService.getTenantInformation(this.userDetails.UserName).subscribe({
        next: (response: any) => {
          if(response){
            if(response.IsTenantFormFillUp && response.IsRentRequestAccept){
              this.isAuthenticateTenant = true;
            }
          }
        },
        error: (error: any) =>{
          alert(error.message);
          console.log(error);
        }
      });
    }
  }

  processingUserIconText(name: string){
    let index: number = 0;
    let subsStr: any = name.split(" ");
    let userIconText: any = "";
    for (let str of subsStr){
      index++;
      if(index<3)userIconText+=str[0];
      else break;
    }

    return userIconText.toUpperCase();
  }

  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("userType");
    window.location.reload();
  }

  containKeyWord(searchKey: string){
    if(searchKey===''){
      let lastKey: string[] = window.location.href.split('/');
      if(lastKey[lastKey.length - 1]!==""){
        return false;
      }
    }else if(searchKey==='house'){
      if(window.location.href.includes("house/rentRequest")){
        return false;
      }
    }
    return  window.location.href.includes(searchKey);
  }

}
