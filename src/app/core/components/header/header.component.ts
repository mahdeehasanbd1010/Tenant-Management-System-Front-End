import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticateUser: any = false;
  userIcon: any = "";
  userDetails: any = null;
  userType: any = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticateUser = this.authService.isAuthenticatedUser();
    this.userDetails = JSON.parse(localStorage.getItem("userDetails") as string);
    this.userType = localStorage.getItem("userType") as string;

    console.log(this.userType);

    if(this.isAuthenticateUser){
      this.userIcon =  this.processingUserIconText(this.userDetails.FullName);
      console.log(this.userIcon);
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
    console.log("userIconText");
    console.log(userIconText)
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
    }
    return  window.location.href.includes(searchKey);
  }

}
