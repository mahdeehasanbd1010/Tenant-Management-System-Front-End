import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PayMonthBillComponent } from './components/pay-month-bill/pay-month-bill.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';


@NgModule({
  declarations: [
    PayMonthBillComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
