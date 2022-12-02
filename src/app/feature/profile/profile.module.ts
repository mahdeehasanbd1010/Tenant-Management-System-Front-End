import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {HomeownerProfileComponent} from "./components/homeowner-profile/homeowner-profile.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeownerProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProfileModule { }
