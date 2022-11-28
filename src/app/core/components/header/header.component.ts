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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticateUser = this.authService.isAuthenticatedUser();
    this.userDetails = JSON.parse(localStorage.getItem("userDetails") as string);

    if(this.isAuthenticateUser){
      this.userIcon =  this.processingUserIconText(this.userDetails.FullName);
      console.log(this.userIcon);
    }
  }

  processingUserIconText(name: string){
    let subsStr: any = name.split(" ");
    let userIconText: any = "";
    for (let str of subsStr){
      userIconText+=str[0];
    }
    return userIconText.toUpperCase();
  }

  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("userDetails");
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
