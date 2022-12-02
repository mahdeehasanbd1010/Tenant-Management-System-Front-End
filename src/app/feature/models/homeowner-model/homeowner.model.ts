export class HomeownerModel {
  id!:string;
  fullName!:string;
  username!:string;
  email!:string;
  phoneNumber!:string;
  password!:string;
  houseList:any = [];
  userType:string = "Homeowner"
}
