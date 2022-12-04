import { Component, OnInit } from '@angular/core';
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RentRequestService} from "../../services/rent-request/rent-request.service";

@Component({
  selector: 'app-rent-request',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.scss']
})
export class RentRequestComponent implements OnInit {

  homeownerUsername: any;
  rentRequestList: any;

  constructor(private userTypeService: UserTypeService,
              private router: Router,
              private route: ActivatedRoute,
              private rentRequestService: RentRequestService) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.getRentRequestList();
    }else{
      this.router.navigate([""]);
    }
  }

  getRentRequestList(){
    let userDetails: any = JSON.parse(localStorage.getItem("userDetails") as string);
    this.homeownerUsername = userDetails.UserName;
    this.rentRequestService.getRentRequestList(this.homeownerUsername).subscribe({
      next: (response: any) => {
        if (response) {
          this.rentRequestList = response;
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  onAccept(tenantUsername: string, houseId: string, flatId: string){
    this.rentRequestService.acceptRentRequest(this.homeownerUsername, tenantUsername, houseId, flatId).subscribe({
      next: (response: any) => {
        this.ngOnInit();
        // window.location.assign("house/rentRequest");
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  onReject(tenantUsername: string, houseId: string, flatId: string){
    this.rentRequestService.rejectRentRequest(this.homeownerUsername, tenantUsername, houseId, flatId).subscribe({
      next: (response: any) => {
        this.ngOnInit();
        // window.location.assign("house/rentRequest");
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
