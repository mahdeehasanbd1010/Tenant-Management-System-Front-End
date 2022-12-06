import { Component, OnInit } from '@angular/core';
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {Router} from "@angular/router";
import {TenantProfileService} from "../../services/tenant-profile/tenant-profile.service";
import {TenantModel} from "../../../models/tenant-model/tenant.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss']
})
export class TenantProfileComponent implements OnInit {

  updatedTenant: TenantModel = new TenantModel();
  tenantUsername: any;
  tenant: any;

  isEditable: boolean = false;
  form!: FormGroup;

  constructor(private userTypeService: UserTypeService,
              private router: Router,
              private tenantProfileService: TenantProfileService,
              private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    if(this.userTypeService.isTenant()){
      this.tenantUsername = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.getTenantInfo();
    } else {
      this.router.navigate([""]);
    }
  }

  getTenantInfo(){
    this.tenantProfileService.getTenantInfo(this.tenantUsername).subscribe({
      next: (response: any) => {
        if (response) {
          this.tenant = response;
          console.log(this.tenant);
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
        id: [this.tenant.Id, Validators.required],
        fullName: [this.tenant.FullName, Validators.required],
        houseId: [this.tenant.HouseId, Validators.required],
        flatId: [this.tenant.FlatId, Validators.required],
        homeownerUsername: [this.tenant.HomeownerUsername, Validators.required],
        userName: [this.tenant.UserName, Validators.required],
        email: [this.tenant.Email, Validators.required],
        phoneNumber: [this.tenant.PhoneNumber, Validators.required],
        password: [this.tenant.Password, Validators.required],
        userType: [this.tenant.UserType, Validators.required],
        isTenantFormFillUp: [this.tenant.IsTenantFormFillUp, Validators.required],
        isRentRequestAccept: [this.tenant.IsRentRequestAccept, Validators.required],
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
    this.isEditable = false;
    this.updatedTenant = this.form.value;
    console.log(this.updatedTenant);
    this.tenantProfileService.updateTenantInfo(this.tenantUsername, this.updatedTenant).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          window.location.assign("profile/tenant");
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
