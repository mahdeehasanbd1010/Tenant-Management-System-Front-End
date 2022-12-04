import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../../models/house.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AddHouseService} from "../../services/add-house/add-house.service";
import {Router} from "@angular/router";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  houseModel: HouseModel = new HouseModel();
  submitted = false;
  userDetails: any;

  form: FormGroup = new FormGroup({
    houseId: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder,
              private addHouseService: AddHouseService,
              private userTypeService: UserTypeService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.submitted = false;
      this.validateTheFormField();
    }else{
      this.router.navigate([""]);
    }
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        houseId: ['', Validators.required],
        address: ['', Validators.required]
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

    this.addHouseService.addHouse(this.houseModel).subscribe({
      next:(response: any)=>{
        window.location.assign("house");
      },
      error: (err: any)=>{
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  addHomeownerUserName(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') as string);
    this.houseModel.homeownerUserName = this.userDetails.UserName;
  }

}
