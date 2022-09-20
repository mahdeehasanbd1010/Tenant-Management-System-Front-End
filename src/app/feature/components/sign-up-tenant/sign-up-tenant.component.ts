import { Component, OnInit } from '@angular/core';
import {TenantModel} from "../../models/tenant-model/tenant.model";
import {TenantSignUpModel} from "../../models/tenant-sign-up-model/tenant-sign-up.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Validation} from "../../utils/validation/validation";
import {TenantAuthService} from "../../services/tenant-auth/tenant-auth.service";

@Component({
  selector: 'app-sign-up-tenant',
  templateUrl: './sign-up-tenant.component.html',
  styleUrls: ['./sign-up-tenant.component.scss']
})
export class SignUpTenantComponent implements OnInit {

  tenant: TenantModel = new TenantModel();
  tenantSignUpModel: TenantSignUpModel = new TenantSignUpModel();
  isAgree: any = false;
  submitted: any = false;

  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    flatId: new FormControl(''),
    homeownerUsername: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private tenantAuthService: TenantAuthService) { }

  ngOnInit(): void {
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
        flatId: ['', Validators.required],
        homeownerUsername: ['', Validators.required],
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
    console.log(this.tenantSignUpModel);
    this.convertModelToTenant();
    // this.tenantSignUpModel = new TenantSignUpModel();
    console.log(this.tenant);
    // console.log(JSON.stringify(this.form.value, null, 2));

    this.tenantAuthService.signUpToTheServer(this.tenant).subscribe((response)=>{
      if(response){
        console.log(response);
        this.router.navigate(['/login']);
      }
    }, (error: any)=>{
      alert(error.message());
      console.log(error);
    })

  }

  convertModelToTenant(){
    this.tenant.fullName = this.tenantSignUpModel.fullName;
    this.tenant.flatId = this.tenantSignUpModel.flatId;
    this.tenant.homeownerUsername = this.tenantSignUpModel.homeownerUsername;
    this.tenant.username = this.tenantSignUpModel.username;
    this.tenant.email = this.tenantSignUpModel.email;
    this.tenant.phoneNumber = this.tenantSignUpModel.phoneNumber;
    this.tenant.password = this.tenantSignUpModel.password;
  }

}
