import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "../../shared/services/auth-guard/auth-guard.service";
import {PayMonthBillComponent} from "./components/pay-month-bill/pay-month-bill.component";
import {TransactionHistoryComponent} from "./components/transaction-history/transaction-history.component";


const routes: Routes = [
  {
    path: 'tenant',
    component: PayMonthBillComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'homeowner/house/:houseId/flat/:flatId',
    component: TransactionHistoryComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
