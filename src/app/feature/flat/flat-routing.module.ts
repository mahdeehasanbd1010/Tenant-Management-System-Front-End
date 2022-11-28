import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddFlatComponent} from "./components/add-flat/add-flat.component";
import {AuthGuardService} from "../../shared/services/auth-guard/auth-guard.service";

const routes: Routes = [
  {
    path: 'add',
    component: AddFlatComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatRoutingModule { }
