import { Component, OnInit } from '@angular/core';
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionHistoryService} from "../../services/transaction-history.service";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  homeownerUserName: any;
  houseId: any;
  flatId: any;

  transactionList: any;

  constructor(private userTypeService: UserTypeService,
              private router: Router,
              private route: ActivatedRoute,
              private transactionHistoryService: TransactionHistoryService) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.houseId = this.route.snapshot.paramMap.get('houseId');
      this.flatId = this.route.snapshot.paramMap.get('flatId');

      this.getTransactionListForHomeowner();
    }else{
      this.router.navigate([""]);
    }
  }
  getTransactionListForHomeowner(){
    this.transactionHistoryService.getTransactionListForHomeowner(this.homeownerUserName, this.houseId, this.flatId).subscribe({
      next: (response: any) => {
        if (response) {
          this.transactionList = response;
          console.log(this.transactionList);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
