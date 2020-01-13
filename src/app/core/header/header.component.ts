import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { AddtweetComponent } from 'src/app/components/addtweet/addtweet.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  watermelon: string;
  signup: string;
  in: string;
  note: string;
  plus: string;
  constructor(private dlg: MatDialog) {
  }

  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.in = '../../../assets/images/png/back.png';
    this.signup = '../../../assets/images/png/next.png';
    this.note = '../../../assets/images/png/paper.png';
    this.plus = '../../../assets/images/png/plus.png';
  }
  addTweet() {
    this.dlg.open(AddtweetComponent);
  }
  onLogin() {
    this.dlg.open(LoginComponent);
  }
  onSignup() {
    this.dlg.open(SignupComponent);
  }
}
