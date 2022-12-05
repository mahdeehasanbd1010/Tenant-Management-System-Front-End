import { Component, OnInit } from '@angular/core';
import {UserTypeService} from "../../../../shared/services/user-type/user-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TenantDetailsService} from "../../services/tenant-details/tenant-details.service";

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  homeownerUserName: any;
  tenantUserName: any;
  tenantRegistrationForm: any;

  pageNumber!: number;

  constructor(private userTypeService: UserTypeService,
              private route: ActivatedRoute,
              private router: Router,
              private tenantDetailsService: TenantDetailsService) { }

  ngOnInit(): void {
    if(this.userTypeService.isHomeowner()){
      this.homeownerUserName = JSON.parse(localStorage.getItem('userDetails') as string).UserName;
      this.tenantUserName = this.route.snapshot.paramMap.get('tenantUserName');
      this.pageNumber = Number(this.route.snapshot.paramMap.get('pageNumber'));
      this.getFLatDetails();

    }else{
      this.router.navigate([""]);
    }
  }

  getFLatDetails(){
    this.tenantDetailsService.getTenantRegistrationForm(this.tenantUserName).subscribe({
      next: (response: any) => {
        if (response) {
          this.tenantRegistrationForm = response;
          console.log(this.tenantRegistrationForm);
        }
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }

  downloadRegistrationForm(){
    this.tenantDetailsService.downloadRegistrationForm(this.tenantUserName).subscribe({
      next: (response: any) => {
        console.log(response);
        let fileName: any = this.tenantUserName+'.pdf';
        // console.log(response.headers.get('Content-Disposition'));
        let blob: Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      },
      error: (err: any) => {
        alert(err.message);
        console.log(err.message);
      }
    });
  }
}
