import {Component, OnInit} from '@angular/core';
import {HouseIndexService} from "../../services/house-index/house-index.service";

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html',
  styleUrls: ['./house-index.component.scss']
})
export class HouseIndexComponent implements OnInit {

  houseList: any = [];

  constructor(private houseIndexService: HouseIndexService) {
  }

  ngOnInit(): void {
    let homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    console.log(homeownerUserName);

    this.houseIndexService.getAllHouseInfo(homeownerUserName).subscribe({
      next: (response: any) => {
        if (response) {
          this.houseList = response;
          console.log(this.houseList);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    })
  }

}
