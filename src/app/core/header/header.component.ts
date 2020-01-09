import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  watermelon: string;
  signup: string;
  in: string;
  constructor(private dlg: MatDialog) {
  }

  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.in = '../../../assets/images/png/back.png';
    this.signup = '../../../assets/images/png/next.png';
  }
  onLogin() {
    this.dlg.open(LoginComponent);
  }
  onSignup() {
    this.dlg.open(SignupComponent);
  }
}
