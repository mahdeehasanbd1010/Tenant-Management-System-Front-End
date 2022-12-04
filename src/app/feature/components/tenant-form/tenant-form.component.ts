import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TenantRegistrationFormModel} from "../../models/tenant-form-model/tenant-form.model";
import {TenantFormService} from "../../services/tenant-form/tenant-form.service";
import {Router} from "@angular/router";
import {UserTypeService} from "../../../shared/services/user-type/user-type.service";
import {SweetAlertService} from "../../../shared/services/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss']
})
export class TenantFormComponent implements OnInit {

  @ViewChild('registrationForm', {static: false}) formElement!: ElementRef;

  tenantRegistrationFormModel: TenantRegistrationFormModel = new TenantRegistrationFormModel();
  imageFile!: File;
  imageUrl: string = '';
  signatureUrl: string = '';
  formPageNo: number = 0;

  userType!: string;

  uploadForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    fatherName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    maritalStatus: new FormControl(''),
    permanentAddress: new FormControl(''),
    occupation: new FormControl(''),
    addressOfTheInstitutionOrWorkPlace: new FormControl(''),
    religion: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    nidNumber: new FormControl(''),
    passportNumber: new FormControl(''),
    imageFile: new FormControl(''),
    signature: new FormControl(''),

    registrationDate: new FormControl(''),

    guardianName: new FormControl(''),
    relation: new FormControl(''),
    guardianAddress: new FormControl(''),
    guardianPhoneNumber: new FormControl(''),

    flatNo: new FormControl(''),
    houseNo: new FormControl(''),
    roadNo: new FormControl(''),
    area: new FormControl(''),
    postalCode: new FormControl(''),

    housekeeperName: new FormControl(''),
    housekeeperNIDNumber: new FormControl(''),
    housekeeperPhoneNumber: new FormControl(''),
    housekeeperPermanentAddress: new FormControl(''),

    driverName: new FormControl(''),
    driverNIDNumber: new FormControl(''),
    driverPhoneNumber: new FormControl(''),
    driverPermanentAddress: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private tenantFormService: TenantFormService,
              private router: Router,
              private userTypeService: UserTypeService,
              private sweetAlertService: SweetAlertService) {
  }

  ngOnInit(): void {
    if(this.userTypeService.isTenant()){
      this.formPageNo = 1;
      this.validateTheFormField();
    }
    else{
      this.router.navigate([""]);
    }
  }

  validateTheFormField(){
    this.uploadForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        fatherName: ['' , Validators.required],
        dateOfBirth: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        permanentAddress: ['', Validators.required],
        occupation: ['', Validators.required],
        addressOfTheInstitutionOrWorkPlace: ['', Validators.required],
        religion: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', Validators.required],
        nidNumber: ['', Validators.required],
        passportNumber: [''],
        imageFile: ['', Validators.required],
        signature: ['', Validators.required],
        date: [''],

        guardianName: ['', Validators.required],
        relation: [''],
        guardianAddress: ['', Validators.required],
        guardianPhoneNumber: ['', Validators.required],

        flatNo: ['', Validators.required],
        houseNo: ['', Validators.required],
        roadNo: ['', Validators.required],
        area: ['', Validators.required],
        postalCode: ['', Validators.required],

        housekeeperName: [''],
        housekeeperNIDNumber: [''],
        housekeeperPhoneNumber: [''],
        housekeeperPermanentAddress: [''],

        driverName: [''],
        driverNIDNumber: [''],
        driverPhoneNumber: [''],
        driverPermanentAddress: [''],
      }
    );
  }

  onSubmit(): void {
    let userDetails: any = JSON.parse(localStorage.getItem("userDetails") as string);
    this.tenantRegistrationFormModel.userName = userDetails.UserName;
    this.tenantFormService.saveTenantInformation(this.tenantRegistrationFormModel).subscribe({
      next: (response: any) => {
        if (response) {
          console.log(response);
          this.sweetAlertService.sweetAlert(
            "Registration Successful",
            "You are successfully registered!",
            "success", "");
        }
      }, error: (error: any) => {
        alert(error.message);
        console.log(error);
      }
    });
    console.log(this.tenantRegistrationFormModel);
  }

  onSelectFile(event: any) {
    if (event.target.files) {
      let imageReader: FileReader = new FileReader();
      imageReader.readAsDataURL(event.target.files[0]);
      imageReader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.tenantRegistrationFormModel.personalInfo.imageFile = this.imageUrl;
      }
      console.log(this.imageUrl);
    }
  }

  onSelectSignatureImage(event: any) {
    if (event.target.files) {
      let imageReader: FileReader = new FileReader();
      imageReader.readAsDataURL(event.target.files[0]);
      imageReader.onload = (event: any) => {
        this.signatureUrl = event.target.result;
        this.tenantRegistrationFormModel.personalInfo.signature = this.signatureUrl;
      }
      console.log(this.signatureUrl);
    }
  }

  nextPage() {
    this.formPageNo += 1;
    console.log(this.formPageNo);
  }

  previousPage() {
    this.formPageNo -= 1;
    console.log(this.formPageNo);
  }

}
