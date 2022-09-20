import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TenantFormModel} from "../../models/tenant-form-model/tenant-form.model";
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss']
})
export class TenantFormComponent implements OnInit {

  @ViewChild('registrationForm', {static: false}) formElement!: ElementRef;

  tenantFormModel: TenantFormModel = new TenantFormModel();
  imageFile!: File;
  imageUrl: string = '';

  uploadForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    fatherName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    maritalStatus: new FormControl(''),
    repeatPassword: new FormControl(''),
    occupation: new FormControl(''),
    presentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
    nidNumber: new FormControl(''),
    passportNumber: new FormControl(''),
    imageFile: new FormControl(null)
  });

  constructor(private formBuilder:FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.uploadForm=  this.formBuilder.group(
      {
        name: [''],
        fatherName: [''],
        dateOfBirth: [''],
        phoneNumber: [''],
        maritalStatus: [''],
        occupation: [''],
        presentAddress: [''],
        permanentAddress: [''],
        nidNumber: [''],
        passportNumber: [''],
        imageFile: [null]
      }
    );
  }

  onSubmit(): void {
    //'p', 'pt','a4'
    // html2canvas(this.formElement.nativeElement).then((canvas:any)=>{
    //   console.log(canvas);
    //   let imageData = canvas.toDataURL('image/png');
    //   let pdfDoc = new jsPDF('p', 'pt','a4');
    //   let imageWidth = 208;
    //   let imageHeight = canvas.height * imageWidth / canvas.weight;
    //   console.log(canvas);
    //   console.log(canvas.height);
    //   console.log(canvas.weight);
    //   pdfDoc.addImage(imageData, 0, 0, 600, 800);
    //   pdfDoc.save("./registration_form.pdf");
    // });
    const pdfDoc = new jsPDF('l','pt','a4');
    pdfDoc.html(this.formElement.nativeElement,{
      callback: (pdf)=>{
        pdf.save("registration_form.pdf");
      }
    })
    // console.log(this.tenantFormModel);
  }

  onSelectFile(event: any){
    if(event.target.files){
      let imageReader: FileReader = new FileReader();
      imageReader.readAsDataURL(event.target.files[0]);
      imageReader.onload = (event: any)=>{
        this.imageUrl = event.target.result;
        console.log(this.imageUrl);
      }
    }
    // this.imageFile = <File>event.target.files[0];
    // console.log(this.imageFile);
    // this.uploadForm.get('imageFile')?.setValue(this.imageFile);
    // const imageData = new FormData();
    // imageData.append("image", this.imageFile, this.imageFile.name);
    // console.log(imageData);
  }

}
