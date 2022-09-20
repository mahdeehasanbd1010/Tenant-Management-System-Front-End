import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import { LoginComponent } from './components/login/login.component';
import {SignUpTypeComponent} from "./components/sign-up-type/sign-up-type.component";
import {SignUpTenantComponent} from "./components/sign-up-tenant/sign-up-tenant.component";
import {LoginTypeComponent} from "./components/login-type/login-type.component";
import {LoginTenantComponent} from "./components/login-tenant/login-tenant.component";
import {TenantFormComponent} from "./components/tenant-form/tenant-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign-up',
    component: SignUpTypeComponent
  },
  {
    path:'sign-up/homeowner',
    component: SignUpComponent
  },
  {
    path:'sign-up/tenant',
    component: SignUpTenantComponent
  },
  {
    path:'login',
    component: LoginTypeComponent
  },
  {
    path:'login/homeowner',
    component: LoginComponent
  },
  {
    path:'login/tenant',
    component: LoginTenantComponent
  },
  {
    path:'tenant/tenant-form',
    component: TenantFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
