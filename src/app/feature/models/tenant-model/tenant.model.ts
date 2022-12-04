export class TenantModel {
  id!:string;
  fullName!:string;
  houseId!:string;
  flatId!:string;
  homeownerUsername!:string;
  username!:string;
  email!:string;
  password!:string;
  phoneNumber!:string;
  isTenantFormFillUp:boolean = false;
  isRentRequestAccept:boolean = false;
  userType:string = "Tenant";
}
