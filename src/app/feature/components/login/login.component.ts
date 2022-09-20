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
              private router: Router,
              private homeownerAuthService: HomeownerAuthService) { }

  ngOnInit(): void {
    console.log("hello login");
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
    // console.log(JSON.stringify(this.form.value, null, 2));

    this.homeownerAuthService.loginToTheServer(this.loginModel).subscribe((response:any)=>{
      if(response){
        console.log(response);
        this.router.navigate(['']);
      }
    },(error: any)=>{
      alert(error.message);
      console.log(error);
    });
  }

}
