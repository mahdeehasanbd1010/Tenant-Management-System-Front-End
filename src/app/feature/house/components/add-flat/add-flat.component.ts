import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FlatModel} from "../../models/flat.model";
import {ActivatedRoute} from "@angular/router";
import {AddFlatService} from "../../services/add-flat/add-flat.service";

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.scss']
})
export class AddFlatComponent implements OnInit {

  flatModel: FlatModel = new FlatModel();
  submitted = false;
  userDetails: any;
  houseId: any;

  form: FormGroup = new FormGroup({
    flatId: new FormControl(''),
    floorNumber: new FormControl(''),
    numberOfRoom: new FormControl(''),
    numberOfWashroom: new FormControl(''),
    numberOfDiningRoom: new FormControl(''),
    numberOfDrawingRoom: new FormControl(''),
    numberOfBalcony: new FormControl(''),
    numberOfKitchen: new FormControl(''),
    rent: new FormControl('')
  });


  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private addFlatService: AddFlatService
  ) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('houseId');
    console.log(this.houseId);
    this.submitted = false;
    this.validateTheFormField();
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        flatId: ['', Validators.required],
        floorNumber: ['', Validators.required],
        numberOfRoom: ['', Validators.required],
        numberOfWashroom: ['', Validators.required],
        numberOfDiningRoom: ['', Validators.required],
        numberOfDrawingRoom: ['', Validators.required],
        numberOfBalcony: ['', Validators.required],
        numberOfKitchen: ['', Validators.required],
        rent: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {
    console.log("this.form.invalid")
    console.log(this.form.invalid)
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.addHomeownerUserName();
    this.addHouseId();
    console.log(this.flatModel);
    this.addFlatService.addFlat(this.flatModel).subscribe({
      next:(response: any)=>{
        window.location.assign("house/details/"+this.houseId);
      },
      error: (err: any)=>{
        alert(err.message);
        console.log(err.message);
      }
    })
  }

  addHomeownerUserName(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') as string);
    this.flatModel.homeownerUserName = this.userDetails.UserName;
  }

  addHouseId(){
    this.flatModel.houseId = this.houseId as string;
  }

}
