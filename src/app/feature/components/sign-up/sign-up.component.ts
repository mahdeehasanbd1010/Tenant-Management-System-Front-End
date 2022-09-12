import { Component, OnInit } from '@angular/core';
import {SignUpModel} from "../../models/sign-up-model/sign-up.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpModel: SignUpModel = new SignUpModel();
  isAgree = false;

  submitted = false;

  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpModel = new SignUpModel();
    this.isAgree = false;
    this.validateTheFormField();
  }

  agreeToTheStatements(){
    if(this.isAgree){
      this.isAgree = false;
    }else{
      this.isAgree = true;
    }
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber:['', [Validators.minLength(11), Validators.maxLength(11)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
        ],
        repeatPassword: ['', [Validators.required]],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        //validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    console.log(this.form.controls);
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
