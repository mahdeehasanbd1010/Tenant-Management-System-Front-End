import {Component, Input, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {HomeownerModel} from "../../models/homeowner-model/homeowner.model";
import {HomeownerAuthService} from "../../services/homeowner-auth/homeowner-auth.service";

const fireBaseConfig = {
  apiKey: "AIzaSyD8BFbmUB4me0h5PjBFm2TgPAhCPu8s8Ck",
  authDomain: "otpverification-2d339.firebaseapp.com",
  projectId: "otpverification-2d339",
  storageBucket: "otpverification-2d339.appspot.com",
  messagingSenderId: "556029321926",
  appId: "1:556029321926:web:80feb9752a373fbd182dc7",
  measurementId: "G-CE3FK7Q4XN"
}

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  @Input() verificationId: any = null;
  @Input() signUpModel: any = null;

  otpFieldConfig = {
    allowNumbersOnly:true,
    length:6,
    isPasswordInput:false,
    disableAutoFocus:false,
    placeholder: '',
    inputStyles:{
      width:'40px',
      height: '50px'
    }
  }

  isFilledOtp: any = false;
  otpCode: any;
  homeowner: HomeownerModel = new HomeownerModel();

  constructor(private homeownerAuthService: HomeownerAuthService) { }


  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
  }

  onOtpChange(otpCode: any){
    if(otpCode.length===this.otpFieldConfig.length){
      this.isFilledOtp = true;
    }
    this.otpCode = otpCode;
  }

  convertModelToHomeowner(){
    this.homeowner.fullName = this.signUpModel.fullName;
    this.homeowner.username = this.signUpModel.username;
    this.homeowner.email = this.signUpModel.email;
    this.homeowner.phoneNumber = this.signUpModel.phoneNumber;
    this.homeowner.password = this.signUpModel.password;
  }

  verifyOtp(){
    console.log('in verifyOtp');

    console.log(this.verificationId);
    console.log(this.signUpModel);

    this.isFilledOtp = false;

    let credentials: any = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.otpCode);
    firebase.auth().signInWithCredential(credentials).then((response:any)=>{
      console.log(response);
      localStorage.setItem('user_data', JSON.stringify(response));
      Swal.fire(
        "OTP Verification Successful",
        "You are successfully sign up!",
        "success"
      ).then((response: any)=>{
        if(response){
          this.convertModelToHomeowner();
          this.homeownerAuthService.signUpToTheServer(this.homeowner).subscribe({next: (response: any)=>{
            if(response){
              console.log("successfully sign up");
              console.log(response);
              window.location.assign("login");
            }
          }, error: (error: any)=>{
            alert(error.message());
            console.log(error);
          }
          });
        }
      }).catch((error: any)=>{
        alert(error.message);
        console.log(error);
      });

    }).catch((error: any)=>{
      Swal.fire(
        "OTP Verification Didn't Successful",
        "Please try again",
        "warning"
      ).then((response: any)=>{
        window.location.assign("sign-up");
      }).catch((error: any)=>{
        alert(error.message);
        console.log(error);
      });
      console.log(error);
    });
  }

}
