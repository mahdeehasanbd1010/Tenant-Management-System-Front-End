import { Component, OnInit} from '@angular/core';
import {SignUpModel} from "../../models/sign-up-model/sign-up.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validation} from "../../utils/validation/validation";
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpModel: SignUpModel = new SignUpModel();
  isAgree: any = false;
  submitted: any = false;
  isOtp: any = false;
  verificationId:any;



  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  reCaptchaVerifier: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    firebase.initializeApp(fireBaseConfig);
    this.signUpModel = new SignUpModel();
    this.isAgree = false;
    this.isOtp = false;

    localStorage.removeItem('verificationId');

    this.validateTheFormField();
  }

  agreeToTheStatements(){
    if(this.isAgree){
      this.isAgree = false;
    }else{
      this.isAgree = true;
    }
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber:['', [Validators.minLength(11), Validators.maxLength(11)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
        ],
        repeatPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'repeatPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // console.log(JSON.stringify(this.form.value, null, 2));
    this.getOTP();
  }


  getOTP(){
    console.log('getOtp');
    console.log(this.signUpModel.phoneNumber);
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-up-button',
      {size:'invisible'});
    firebase.auth().signInWithPhoneNumber('+88'+this.signUpModel.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult: any)=>{
        console.log(confirmationResult);
        localStorage.removeItem('verificationId');
        localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId));
        console.log(localStorage.getItem('verificationId'));
        this.verificationId = JSON.parse(localStorage.getItem('verificationId')||'{}');
        this.isOtp = true;
        //this.router.navigate(['/login']);
      }).catch((error: any)=>{
        alert(error.message);
        console.log(error);
        window.location.reload();
    });
  }

  // onOtpChange(otpCode: any){
  //   if(otpCode.length===this.otpFieldConfig.length){
  //    this.isFilledOtp = true;
  //   }
  //   this.otpCode = otpCode;
  // }

  // verifyOtp(){
  //   console.log(this.verificationId);
  //   let credentials: any = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.otpCode);
  //   firebase.auth().signInWithCredential(credentials).then((response:any)=>{
  //     console.log(response);
  //     localStorage.setItem('user_data', JSON.stringify(response));
  //       Swal.fire(
  //         "OTP Verification Successful",
  //         "You are successfully sign up!",
  //         "success"
  //       ).then((response: any)=>{
  //         this.router.navigate(['/login']);
  //       }).catch((error: any)=>{
  //         alert(error.message);
  //         console.log(error);
  //       });
  //
  //   }).catch((error: any)=>{
  //       Swal.fire(
  //         "OTP Verification Didn't Successful",
  //         "Please try again",
  //         "warning"
  //       ).then((response: any)=>{
  //         this.router.navigate(['/sign-up']);
  //       }).catch((error: any)=>{
  //         alert(error.message);
  //         console.log(error);
  //       });
  //       console.log(error);
  //   });
  // }

}
