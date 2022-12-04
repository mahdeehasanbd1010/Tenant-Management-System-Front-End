import {Component, OnInit} from '@angular/core';
import {HouseIndexService} from "../../services/house-index/house-index.service";
import {Router} from "@angular/router";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html',
  styleUrls: ['./house-index.component.scss']
})
export class HouseIndexComponent implements OnInit {

  houseList: any = [];

  constructor(private houseIndexService: HouseIndexService,
              private userTypeService: UserTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.getAllHouse();
    }else{
      this.router.navigate([""]);
    }
  }

  getAllHouse(){
    let homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
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
    });
  }

}
