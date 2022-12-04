import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtilityBillModel} from "../../models/utility-bill.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AddUtilityBillService} from "../../services/add-utility-bill/add-utility-bill.service";
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";

@Component({
  selector: 'app-add-utility-bill',
  templateUrl: './add-utility-bill.component.html',
  styleUrls: ['./add-utility-bill.component.scss']
})
export class AddUtilityBillComponent implements OnInit {

  utilityBillModel: UtilityBillModel = new UtilityBillModel();
  submitted = false;
  homeownerUserName: any;
  houseId: any
  flatId: any

  form: FormGroup = new FormGroup({
    billName: new FormControl(''),
    billAmount: new FormControl(''),
  });

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private addUtilityBillService: AddUtilityBillService,
              private userTypeService: UserTypeService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.submitted = false;
      this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.houseId = this.route.snapshot.paramMap.get('houseId');
      this.flatId = this.route.snapshot.paramMap.get('flatId');
      this.validateTheFormField();
    }else{
      this.router.navigate([""]);
    }
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        billName: ['', Validators.required],
        billAmount: ['', Validators.required]
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
    console.log(this.utilityBillModel);
    this.addUtilityBillService.addUtilityBill(this.homeownerUserName, this.houseId,
      this.flatId, this.utilityBillModel).subscribe({
      next:(response: any)=>{
        window.location.assign('house/details/'+this.houseId+'/flat/'+this.flatId+'/utilitiesBills');
      },
      error: (err: any)=>{
        alert(err.message);
        console.log(err.message);
      }
    });
  }

}
