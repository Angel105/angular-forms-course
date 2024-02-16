import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val = {
    email: "hello@gmail.com",
    password: "123456"
  }

  constructor() {


  }

  ngOnInit() {

  }

  login(loginForm: NgForm, $submitEvent: any) {
    console.log(loginForm.value, loginForm.valid, $submitEvent);
    console.log("val", this.val);
  }

}
