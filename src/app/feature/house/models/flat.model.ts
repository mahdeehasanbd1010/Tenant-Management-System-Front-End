import {TenantModel} from "../../models/tenant-model/tenant.model";

export class FlatModel {
  flatId!:string;
  houseId!:string;
  homeownerUserName!:string;
  floorNumber!:number;
  numberOfRoom!:number;
  numberOfWashroom!:number;
  numberOfDiningRoom!:number;
  numberOfDrawingRoom!:number;
  numberOfBalcony!:number;
  numberOfKitchen!:number;
  rent!:number;
  tenantUserName:string = "";
  isRent:boolean = false;
  isRentRequest:boolean = false;
  utilityBillList: any = []
}
