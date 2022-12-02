import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../../models/login-model/login.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TenantAuthService} from "../../services/tenant-auth/tenant-auth.service";

@Component({
  selector: 'app-login-tenant',
  templateUrl: './login-tenant.component.html',
  styleUrls: ['./login-tenant.component.scss']
})
export class LoginTenantComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  submitted = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder,
              private router: Router,
              private tenantAuthService: TenantAuthService) { }

  ngOnInit(): void {
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
    this.tenantAuthService.loginToTheServer(this.loginModel).subscribe({next:(response:any)=>{
      if(response){
        const data: any = response;
        const token: any = response.Token;
        console.log(data);
        localStorage.setItem("jwt", token);
        localStorage.setItem("userDetails", JSON.stringify(data));
        localStorage.setItem("userType", data.UserType);
        if(response.UserType == "Tenant"){
          window.location.assign("tenant/tenant-form");
        }
      }
    },
      error: (error: any)=>{
        alert(error.message);
        console.log(error);
      }
    });
  }

}
