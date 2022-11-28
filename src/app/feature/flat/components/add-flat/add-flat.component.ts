import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../../../house/models/house.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AddHouseService} from "../../../house/services/add-house/add-house.service";
import {FlatModel} from "../../models/flat.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.scss']
})
export class AddFlatComponent implements OnInit {

  flatModel: FlatModel = new FlatModel();
  submitted = false;
  userDetails: any;

  form: FormGroup = new FormGroup({
    flatId: new FormControl(''),
    houseId: new FormControl(''),
    homeownerUserName: new FormControl(''),
    floorNumber: new FormControl(''),
    numberOfRoom: new FormControl(''),
    numberOfWashroom: new FormControl(''),
    numberOfDiningRoom: new FormControl(''),
    numberOfDrawingRoom: new FormControl(''),
    numberOfBalcony: new FormControl(''),
    NumberOfKitchen: new FormControl(''),
    rent: new FormControl('')
  });


  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private addHouseService: AddHouseService
  ) { }

  ngOnInit(): void {
    this.submitted = false;
    this.validateTheFormField();
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        flatId: ['', Validators.required],
        houseId: ['', Validators.required],
        homeownerUserName: ['', Validators.required],
        floorNumber: ['', Validators.required],
        numberOfRoom: ['', Validators.required],
        numberOfWashroom: ['', Validators.required],
        numberOfDiningRoom: ['', Validators.required],
        numberOfDrawingRoom: ['', Validators.required],
        numberOfBalcony: ['', Validators.required],
        NumberOfKitchen: ['', Validators.required],
        rent: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.addHomeownerUserName();
    this.addHouseId();

    // this.addHouseService.addHouse(this.houseModel).subscribe({
    //   next:(response: any)=>{
    //     window.location.assign("house");
    //   },
    //   error: (err: any)=>{
    //     alert(err.message);
    //     console.log(err.message);
    //   }
    // })
  }

  addHomeownerUserName(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') as string);
    this.flatModel.homeownerUserName = this.userDetails.UserName;
  }

  addHouseId(){
    this.flatModel.houseId = this.route.snapshot.paramMap.get('houseId') as string;
  }

}
