import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {HomeComponent} from "./components/home/home.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports:[
    HomeComponent,
    SignUpComponent
  ]
})
export class FeatureModule { }
