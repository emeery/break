import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { AddtweetComponent } from 'src/app/components/shared/addtweet/addtweet.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  watermelon: string;
  note: string;
  plus: string;
  exit: string;
  user: string;
  isAuth = false;
  private autSub: Subscription;
  constructor(
    private dlg: MatDialog,
    public autService: AuthService
  ) { }
  ngOnInit() {
    this.loadPng();
    this.isAuth = this.autService.getIsAuth();
    this.autSub = this.autService.getAutListen()
      .subscribe(aut => {
        this.isAuth = aut;
      });
  }
  loadPng() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.note = '../../../assets/images/png/note.png';
    this.plus = '../../../assets/images/png/plus.png';
    this.exit = '../../../assets/images/png/exit.png';
    this.user = '../../../assets/images/png/user.png';
  }
  logout() {
    this.autService.logout();
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
  ngOnDestroy() {
    this.autSub.unsubscribe();
  }
}
