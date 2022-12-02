import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UtilityBillService} from "../../services/utility-bill/utility-bill.service";

@Component({
  selector: 'app-utility-bill',
  templateUrl: './utility-bill.component.html',
  styleUrls: ['./utility-bill.component.scss']
})
export class UtilityBillComponent implements OnInit {

  houseId: any
  flatId: any
  homeownerUserName: any;
  utilityBillList: any = [];

  constructor(private route: ActivatedRoute,
              private utilityBillService: UtilityBillService) { }

  ngOnInit(): void {
    this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    this.flatId = this.route.snapshot.paramMap.get('flatId');

    this.getUtilityBillList();
  }

  getUtilityBillList(){
    this.utilityBillService.getUtilityBillList(this.homeownerUserName, this.houseId, this.flatId).subscribe({
      next: (response: any) => {
        if (response) {
          this.utilityBillList = response;
          console.log(this.utilityBillList);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
