import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails= {
    email:'',
    password:''
  }
  constructor(private dialogePopUp: MatDialog) {}
  signOpen() {
    this.dialogePopUp.open(SignupComponent)
  }

  ngOnInit(): void {}
}
