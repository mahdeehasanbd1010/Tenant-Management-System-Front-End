import { Component, OnInit } from '@angular/core';
import {FlatDetailsService} from "../../services/flat-details/flat-details.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlatModel} from "../../models/flat.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";

@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent implements OnInit {

  updatedFlat: FlatModel = new FlatModel();

  isEditable: boolean = false;
  houseId: any
  flatId: any
  homeownerUserName: any;
  flat: any

  form!: FormGroup;

  constructor(private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private flatDetailsService: FlatDetailsService,
              private userTypeService: UserTypeService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.houseId = this.route.snapshot.paramMap.get('houseId');
      this.flatId = this.route.snapshot.paramMap.get('flatId');
      this.isEditable = false;
      this.getFLatDetails();
    }else{
     this.router.navigate([""]);
    }
  }

  getFLatDetails(){
    this.flatDetailsService.getFlatInfo(this.homeownerUserName, this.houseId, this.flatId).subscribe({
      next: (response: any) => {
        if (response) {
          this.flat = response;
          console.log(this.flat);
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
        flatId: [this.flat.FlatId, Validators.required],
        houseId: [this.houseId, Validators.required],
        homeownerUserName: [this.homeownerUserName, Validators.required],
        floorNumber: [this.flat.FloorNumber, Validators.required],
        numberOfRoom: [this.flat.NumberOfRoom, Validators.required],
        numberOfWashroom: [this.flat.NumberOfWashroom, Validators.required],
        numberOfDiningRoom: [this.flat.NumberOfDiningRoom, Validators.required],
        numberOfDrawingRoom: [this.flat.NumberOfDrawingRoom, Validators.required],
        numberOfBalcony: [this.flat.NumberOfBalcony, Validators.required],
        numberOfKitchen: [this.flat.NumberOfKitchen, Validators.required],
        rent: [this.flat.Rent, Validators.required],
        tenantUserName:[this.flat.tenantUserName==null?"":this.flat.tenantUserName],
        isRent:[this.flat.IsRent, Validators.required],
        isRentRequest:[this.flat.IsRentRequest, Validators.required],
        utilityBillList:[this.flat.UtilityBillList]
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
    this.updatedFlat = this.form.value;

    this.flatDetailsService.updateFlatInfo(this.flatId, this.updatedFlat).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          window.location.assign('house/details/'+this.houseId+'/flat/'+this.updatedFlat.flatId);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
