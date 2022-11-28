export class TenantRegistrationFormModel {
  userName!:string;
  personalInfo: PersonalInfo = new PersonalInfo();
  emergencyContact: EmergencyContact = new EmergencyContact();
  presentAddress: PresentAddress = new PresentAddress();
  housekeeper: Housekeeper = new Housekeeper();
  driver: Driver = new Driver();
}

export class PersonalInfo{
  name!:string;
  fatherName!:string;
  dateOfBirth!:string;
  maritalStatus!:string;
  permanentAddress!:string;
  occupation!:string;
  addressOfTheInstitutionOrWorkPlace!:string;
  religion!: string;
  phoneNumber!:string;
  email!:string;
  nidNumber!:string;
  passportNumber!:string;
  imageFile!:string;
  signature!:string;
  date!:string;
}

export class EmergencyContact{
  guardianName!:string;
  relation!:string;
  guardianAddress!:string;
  guardianPhoneNumber!:string;
}

export class PresentAddress{
  flatNo!:string;
  houseNo!:string;
  roadNo!:string;
  area!:string;
  postalCode!:number;
}

export class Housekeeper{
  housekeeperName!:string;
  housekeeperNIDNumber!:string;
  housekeeperPhoneNumber!:string;
  housekeeperPermanentAddress!:string;
}

export class Driver{
  driverName!:string;
  driverNIDNumber!:string;
  driverPhoneNumber!:string;
  driverPermanentAddress!:string;
}
