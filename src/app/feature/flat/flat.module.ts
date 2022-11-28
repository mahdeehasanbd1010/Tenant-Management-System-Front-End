import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { FlatRoutingModule } from './flat-routing.module';
import { AddFlatComponent } from './components/add-flat/add-flat.component';


@NgModule({
  declarations: [
    AddFlatComponent
  ],
  imports: [
    CommonModule,
    FlatRoutingModule,
    ReactiveFormsModule
  ]
})
export class FlatModule { }
