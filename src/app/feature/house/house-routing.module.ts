import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HouseIndexComponent} from "./components/house-index/house-index.component";
import {AuthGuardService} from "../../shared/services/auth-guard/auth-guard.service";
import {HouseDetailsComponent} from "./components/house-details/house-details.component";
import {AddHouseComponent} from "./components/add-house/add-house.component";
import {AddFlatComponent} from "./components/add-flat/add-flat.component";
import {FlatDetailsComponent} from "./components/flat-details/flat-details.component";


const routes: Routes = [
  {
    path: '',
    component: HouseIndexComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'details/:houseId',
    component: HouseDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add',
    component: AddHouseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'details/:houseId/flat/add',
    component: AddFlatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'details/:houseId/flat/:flatId',
    component: FlatDetailsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
