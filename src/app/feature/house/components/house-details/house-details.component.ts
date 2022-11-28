import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  public houseId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    console.log(this.houseId);
  }

}
