import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  watermelon: string;
  note: string;
  plus: string;
<<<<<<< HEAD
  exit: string;
  autListenS: Subscription;
  userAut = false;
  constructor(
    private dlg: MatDialog,
    private autService: AuthService
    ) {
  }

=======
  estaAut = false;
  private autSub: Subscription;
  constructor(
    private dlg: MatDialog,
    public autService: AuthService
  ) { }
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
  ngOnInit() {
    this.loadPng();
    this.estaAut = this.autService.getEstaAut();
    this.autSub = this.autService.getEstaAutListen()
      .subscribe(aut => {
        this.estaAut = aut;
        console.log('utt', this.estaAut);
      });
  }
  loadPng() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
<<<<<<< HEAD
    this.signup = '../../../assets/images/png/next.png';
=======
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
    this.note = '../../../assets/images/png/paper.png';
    this.plus = '../../../assets/images/png/plus.png';
    this.exit = '../../../assets/images/png/exit.png';
    this.autService.getAutListen().subscribe(aut => {
      this.userAut = aut;
      console.log('ttt', this.userAut);
    });
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
<<<<<<< HEAD
  onLogout() {
    this.autService.logout();
=======
  ngOnDestroy() {
    this.autSub.unsubscribe();
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
  }
}
