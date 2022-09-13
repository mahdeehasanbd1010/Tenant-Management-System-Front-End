import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from "../../models/login-model/login.model";
import {Validation} from "../../utils/validation/validation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  submitted = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.submitted = false;
    this.validateTheFormField();
  }

  validateTheFormField(){
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

}
