import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HouseDetailsService} from "../../services/house-details/house-details.service";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  public houseId: any;
  public flatList: any = [];

  constructor(private route: ActivatedRoute,
              private houseDetailsService: HouseDetailsService) { }

  ngOnInit(): void {
    let homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    this.houseDetailsService.getAllFlatInfo(homeownerUserName, this.houseId).subscribe({
      next: (response: any) => {
        if (response) {
          this.flatList = response;
          console.log(this.flatList);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
