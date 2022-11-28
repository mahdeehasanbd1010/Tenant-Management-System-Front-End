import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HouseIndexComponent} from "./components/house-index/house-index.component";
import {AuthGuardService} from "../../shared/services/auth-guard/auth-guard.service";
import {HouseDetailsComponent} from "./components/house-details/house-details.component";
import {AddHouseComponent} from "./components/add-house/add-house.component";


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
    path:'details/:houseId/flat',
    loadChildren: () => import('../flat/flat.module').then(m => m.FlatModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
