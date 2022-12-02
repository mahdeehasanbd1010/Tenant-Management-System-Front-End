import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from "../../models/login-model/login.model";
import {Validation} from "../../utils/validation/validation";
import {Router} from "@angular/router";
import {HomeownerAuthService} from "../../services/homeowner-auth/homeowner-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  submitted = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder,
              private homeownerAuthService: HomeownerAuthService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.validateTheFormField();
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log("onSubmit");
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.homeownerAuthService.loginToTheServer(this.loginModel).subscribe({
      next: (response:any)=>{
        if(response){
          const data: any = response;
          const token: any = response.Token;
          console.log(data);
          localStorage.setItem("jwt", token);
          localStorage.setItem("userDetails", JSON.stringify(data));
          localStorage.setItem("userType", data.UserType);
          if(response.UserType == "Homeowner"){
            window.location.assign("");
          }
        }
    }, error:(error: any)=>{
      alert(error.message);
      console.log(error);
    }
    });
  }

}
