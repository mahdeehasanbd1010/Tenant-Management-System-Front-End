import { Component, OnInit } from '@angular/core';
import {HomeownerProfileService} from "../../services/homeowner-profile/homeowner-profile.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomeownerModel} from "../../../models/homeowner-model/homeowner.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-homeowner-profile',
  templateUrl: './homeowner-profile.component.html',
  styleUrls: ['./homeowner-profile.component.scss']
})
export class HomeownerProfileComponent implements OnInit {

  updatedHomeowner: HomeownerModel = new HomeownerModel();

  isEditable: boolean = false;
  currentHouseNumber: number = 0;

  homeowner: any;
  homeownerUserName!: string;
  userType!: string;

  form!: FormGroup;

  constructor(private homeownerProfileService: HomeownerProfileService,
              private formBuilder:FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
    this.userType = localStorage.getItem('userType') as string;
    if(this.userType !== "Homeowner"){
      window.location.assign("");
    }
    this.getHomeownerInfo();
  }

  getHomeownerInfo(){
    console.log("here")
    this.homeownerProfileService.getHomeownerInfo(this.homeownerUserName).subscribe({
      next: (response: any) => {
        if (response) {
          this.homeowner = response;
          this.currentHouseNumber = this.homeowner.HouseList.length;
          console.log(this.homeowner);
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
        id: [this.homeowner.Id, Validators.required],
        fullName: [this.homeowner.FullName, Validators.required],
        userName: [this.homeowner.UserName, Validators.required],
        email: [this.homeowner.Email, Validators.required],
        phoneNumber: [this.homeowner.PhoneNumber, Validators.required],
        password: [this.homeowner.Password, Validators.required],
        houseList: [this.homeowner.HouseList, Validators.required],
        userType: [this.homeowner.UserType, Validators.required]
      }
    );
  }

  onEdit(){
    this.initiateValidateTheFormField();
    this.isEditable = true;
  }

  onSaveChanges(){
    if (this.form.invalid) {
      return;
    }
    this.isEditable = true;
    this.updatedHomeowner = this.form.value;
    console.log(this.updatedHomeowner);
    this.homeownerProfileService.updateHomeownerInfo(this.homeownerUserName, this.updatedHomeowner).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          window.location.assign("profile/homeowner");
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }
}
