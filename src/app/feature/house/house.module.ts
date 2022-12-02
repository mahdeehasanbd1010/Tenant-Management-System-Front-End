import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HouseRoutingModule } from './house-routing.module';
import { HouseIndexComponent } from "./components/house-index/house-index.component";
import { AddHouseComponent } from './components/add-house/add-house.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import {AddHouseService} from "./services/add-house/add-house.service";
import {HouseIndexService} from "./services/house-index/house-index.service";
import { AddFlatComponent } from './components/add-flat/add-flat.component';
import {AddFlatService} from "./services/add-flat/add-flat.service";
import { FlatDetailsComponent } from './components/flat-details/flat-details.component';
import {HouseDetailsService} from "./services/house-details/house-details.service";
import {FlatDetailsService} from "./services/flat-details/flat-details.service";
import { UtilityBillComponent } from './components/utility-bill/utility-bill.component';
import { AddUtilityBillComponent } from './components/add-utility-bill/add-utility-bill.component';

@NgModule({
  declarations: [
    HouseIndexComponent,
    AddHouseComponent,
    HouseDetailsComponent,
    AddFlatComponent,
    FlatDetailsComponent,
    UtilityBillComponent,
    AddUtilityBillComponent,
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AddHouseService,
    HouseIndexService,
    AddFlatService,
    HouseDetailsService,
    FlatDetailsService,
  ]
})
export class HouseModule { }
