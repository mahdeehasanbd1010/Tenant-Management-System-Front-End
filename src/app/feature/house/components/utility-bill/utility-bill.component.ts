import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtilityBillService} from "../../services/utility-bill/utility-bill.service";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";

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
              private utilityBillService: UtilityBillService,
              private userTypeService: UserTypeService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.houseId = this.route.snapshot.paramMap.get('houseId');
      this.flatId = this.route.snapshot.paramMap.get('flatId');

      this.getUtilityBillList();
    }else {
      this.router.navigate([""]);
    }

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
