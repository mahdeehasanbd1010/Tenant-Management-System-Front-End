export class TransactionModel {
  id!:string;
  flatId!:string;
  houseId!:string;
  tenantUserName!:string;
  homeownerUserName!:string;
  transactionDate!:Date;
  transactionYear!:number;
  transactionMonth!:number;
  transactionDateNumber!:number;
  transactionAmount!:number;

  constructor() {
    let date: Date = new Date();
    this.transactionDate = date;
    this.transactionYear = date.getFullYear();
    this.transactionMonth = date.getMonth();
    this.transactionDateNumber = date.getDate();
  }
}
