import { Component, OnInit } from '@angular/core';
import {TransactionModel} from "../../models/transaction/transaction.model";
import {PayMonthBillService} from "../../services/pay-month-bill.service";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {SweetAlertService} from "../../../../shared/services/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-pay-month-bill',
  templateUrl: './pay-month-bill.component.html',
  styleUrls: ['./pay-month-bill.component.scss']
})
export class PayMonthBillComponent implements OnInit {

  paymentHandler: any = null;
  stripeAPIKey: any = environment.stripAPIKey;

  tenantUsername: any;
  transactionModel: TransactionModel = new TransactionModel();
  tenant: any;
  amount: any;

  transactionList: any;
  duePayment: boolean = false;


  constructor(private payMonthBillService: PayMonthBillService,
              private userTypeService: UserTypeService,
              private router: Router,
              private route: ActivatedRoute,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    if(this.userTypeService.isTenant()){
      this.tenantUsername = JSON.parse(localStorage.getItem('userDetails') as string).UserName;

      this.invokeStripe();
      this.getTenantInfo();
      this.getTransactionListForTenant();

      setInterval(()=>{
        console.log("interval");
        if(localStorage.getItem("transactionModelSet")){
          localStorage.removeItem("transactionModelSet");
          this.transactionInfoSave();
        }
      },1000);

    }
    else {
      this.router.navigate([""]);
    }
  }

  getTransactionListForTenant(){
    this.payMonthBillService.getTransactionListForTenant(this.tenantUsername).subscribe({
      next: (response: any) => {
        if (response) {
          this.transactionList = response;
          console.log(response);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  getTenantInfo(){
    this.payMonthBillService.getTenantInfo(this.tenantUsername).subscribe({
      next: (response: any) => {
        if (response) {
          this.tenant = response;
          console.log(response);
          this.currentMonthPayment();
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  currentMonthPayment(){
    this.payMonthBillService.currentMonthPayment(this.tenantUsername).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          this.duePayment = true;
          this.getMonthlyBill();
        }else if(!response){
          console.log(response);
          this.duePayment = false;
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  getMonthlyBill(){
    this.payMonthBillService.getMonthlyBill(this.tenantUsername).subscribe({
      next: (response: any) => {
        if (response) {
          this.amount = response;
          console.log(response);
          this.updateTransactionModel();
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  updateTransactionModel(){
    this.transactionModel.tenantUserName = this.tenant.UserName;
    this.transactionModel.homeownerUserName = this.tenant.HomeownerUsername;
    this.transactionModel.houseId = this.tenant.HouseId;
    this.transactionModel.flatId = this.tenant.FlatId;
    this.transactionModel.transactionAmount = this.amount;
  }

  transactionInfoSave(){
    console.log("transactionInfoSave");
    this.payMonthBillService.saveTransaction(this.transactionModel).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          this.sweetAlertService.sweetAlert(
            "Transaction Successful",
            "You are successfully pay the bill!",
            "success",
            "transaction/tenant"
          )
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  downloadMemo(transactionId: any){
    this.payMonthBillService.downloadBillMemo(transactionId).subscribe({
      next: (response: any) => {
        console.log(response);
        let fileName: any = transactionId+'.pdf';
        let blob: Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        localStorage.setItem('transactionModelSet', "done")
      },
    })
    paymentHandler.open({
      name: 'Stripe',
      description: 'payment gateway',
      amount: this.amount * 100,
      currency: 'BDT',
    });
  }


  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

}
