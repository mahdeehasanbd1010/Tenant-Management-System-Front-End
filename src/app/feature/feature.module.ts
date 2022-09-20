import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {HomeComponent} from "./components/home/home.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { NgOtpInputModule } from  'ng-otp-input';
import {HttpClientModule} from "@angular/common/http";

import {environment} from "../../environments/environment";
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import {HomeownerAuthService} from "./services/homeowner-auth/homeowner-auth.service";
import {TenantAuthService} from "./services/tenant-auth/tenant-auth.service";
import { SignUpTypeComponent } from './components/sign-up-type/sign-up-type.component';
import { SignUpTenantComponent } from './components/sign-up-tenant/sign-up-tenant.component';
import { LoginTypeComponent } from './components/login-type/login-type.component';
import { LoginTenantComponent } from './components/login-tenant/login-tenant.component';
import { TenantFormComponent } from './components/tenant-form/tenant-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    VerifyOtpComponent,
    SignUpTypeComponent,
    SignUpTenantComponent,
    LoginTypeComponent,
    LoginTenantComponent,
    TenantFormComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    SignUpTypeComponent,
    SignUpTenantComponent,
    LoginTypeComponent,
    LoginTenantComponent,
    TenantFormComponent,
  ],
  providers:[
    HomeownerAuthService,
    TenantAuthService,
  ]
})
export class FeatureModule { }
