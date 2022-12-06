import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JwtModule} from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {FeatureModule} from "./feature/feature.module";
import {HouseModule} from "./feature/house/house.module";
import {ProfileModule} from "./feature/profile/profile.module";
import {environment} from "../environments/environment";
import {TransactionModule} from "./feature/transaction/transaction.module";
import { StripeModule } from "stripe-angular"

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StripeModule,
    CoreModule,
    FeatureModule,
    HouseModule,
    ProfileModule,
    TransactionModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: [environment.allowedDomains],
        disallowedRoutes: []
      }
    }),
    StripeModule.forRoot(environment.stripAPIKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
