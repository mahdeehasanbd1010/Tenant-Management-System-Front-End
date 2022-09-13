import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {HomeComponent} from "./components/home/home.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';

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
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class FeatureModule { }
