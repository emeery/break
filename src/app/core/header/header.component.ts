import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { AddtweetComponent } from 'src/app/components/addtweet/addtweet.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

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
  exit: string;
  autListenS: Subscription;
  userAut = false;
  constructor(
    private dlg: MatDialog,
    private autService: AuthService
    ) {
  }

  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.signup = '../../../assets/images/png/next.png';
    this.note = '../../../assets/images/png/paper.png';
    this.plus = '../../../assets/images/png/plus.png';
    this.exit = '../../../assets/images/png/exit.png';
    this.autService.getAutListen().subscribe(aut => {
      this.userAut = aut;
      console.log('ttt', this.userAut);
    });
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
  onLogout() {
    this.autService.logout();
  }
}
