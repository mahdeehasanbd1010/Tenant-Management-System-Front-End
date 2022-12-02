import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeowner-profile',
  templateUrl: './homeowner-profile.component.html',
  styleUrls: ['./homeowner-profile.component.scss']
})
export class HomeownerProfileComponent implements OnInit {

  userType: any;
  homeownerUserName: any;
  constructor() { }

  ngOnInit(): void {

  }

}
