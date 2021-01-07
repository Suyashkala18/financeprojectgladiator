import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Customer } from '../models/customer.service';
import { CustomerServiceService } from '../services/customer-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer:any;
  loginForm!: FormGroup;
  submitted = false;
  msg:any;
  constructor(private formBuilder:FormBuilder,private customerService:CustomerServiceService) {
    this.customer = new Customer();
   }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  loginCheck(){
    this.submitted = true;
    this.customerService.loginCHeckFromApi(this.customer).subscribe(
      c => this.customer = c,
      err => this.msg = err.error.Message);
    }
  }


