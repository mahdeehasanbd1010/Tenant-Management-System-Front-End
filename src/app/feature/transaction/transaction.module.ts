import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PayMonthBillComponent } from './components/pay-month-bill/pay-month-bill.component';


@NgModule({
  declarations: [
    PayMonthBillComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
