import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeownerProfileComponent} from "./components/homeowner-profile/homeowner-profile.component";
import {AuthGuardService} from "../../shared/services/auth-guard/auth-guard.service";
import {TenantProfileComponent} from "./components/tenant-profile/tenant-profile.component";

const routes: Routes = [
  {
    path: 'homeowner',
    component: HomeownerProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tenant',
    component: TenantProfileComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
