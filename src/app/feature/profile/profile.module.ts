import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {HomeownerProfileComponent} from "./components/homeowner-profile/homeowner-profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import { TenantProfileComponent } from './components/tenant-profile/tenant-profile.component';


@NgModule({
  declarations: [
    HomeownerProfileComponent,
    TenantProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule
    ],
  providers:[

  ]
})
export class ProfileModule { }
