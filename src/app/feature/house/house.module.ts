import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { HouseRoutingModule } from './house-routing.module';
import { HouseIndexComponent } from "./components/house-index/house-index.component";
import { AddHouseComponent } from './components/add-house/add-house.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import {AddHouseService} from "./services/add-house/add-house.service";
import {HouseIndexService} from "./services/house-index/house-index.service";

@NgModule({
  declarations: [
    HouseIndexComponent,
    AddHouseComponent,
    HouseDetailsComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    AddHouseService,
    HouseIndexService
  ]
})
export class HouseModule { }
