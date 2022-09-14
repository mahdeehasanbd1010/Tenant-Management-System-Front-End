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

import {environment} from "../../environments/environment";

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule
  ],
  exports:[
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class FeatureModule { }
