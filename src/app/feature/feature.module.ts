import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {HomeComponent} from "./components/home/home.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    SignUpComponent
  ]
})
export class FeatureModule { }
