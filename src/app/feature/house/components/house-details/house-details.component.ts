import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HouseDetailsService} from "../../services/house-details/house-details.service";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HouseModel} from "../../models/house.model";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  updatedHouse: HouseModel = new HouseModel();
  houseId: any;
  flatList: any = [];
  house: any;

  isEditable: boolean = false;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
              private houseDetailsService: HouseDetailsService,
              private userTypeService: UserTypeService,
              private router: Router,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.houseId = this.route.snapshot.paramMap.get('houseId');
      this.isEditable = false;
      this.getAllFlat();
    }else{
      this.router.navigate([""]);
    }
  }

  getAllFlat(){
    let homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    this.houseDetailsService.getHouseDetailsInfo(homeownerUserName, this.houseId).subscribe({
      next: (response: any) => {
        if (response) {
          this.house = response;
          this.flatList = response.FlatList;
          console.log(this.house);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }


  initiateValidateTheFormField(){

    this.form = this.formBuilder.group(
      {
        houseId: [this.house.HouseId, Validators.required],
        homeownerUserName: [this.house.HomeownerUserName, Validators.required],
        address: [this.house.Address, Validators.required],
        flatList: [this.house.FlatList]
      }
    );
  }


  onEdit(){
    this.initiateValidateTheFormField();
    this.isEditable = true;
  }

  onSaveChanges(){
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    this.isEditable = true;
    this.updatedHouse = this.form.value;
    console.log(this.updatedHouse);
    let homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    this.houseDetailsService.updateHouseDetailsInfo(homeownerUserName, this.houseId, this.updatedHouse).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          window.location.assign('house/details/'+this.houseId);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
