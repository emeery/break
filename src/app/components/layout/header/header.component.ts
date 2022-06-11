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
  isAuth = false;
  private authSub: Subscription;
  constructor(
    private dlg: MatDialog,
    public autService: AuthService
  ) { }
  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.isAuth = this.autService.getIsAuth();
    this.authSub = this.autService.getAutListen()
      .subscribe(aut => {
        this.isAuth = aut;
      });
  }

  login() {
    this.dlg.open(LoginComponent)
  }


  logout() {
    this.autService.logout()
  }

  addTweet() {
    // this.dlg.open(AddtweetComponent)
  }

  
  ngOnDestroy() {
    this.authSub.unsubscribe()
  }
}
