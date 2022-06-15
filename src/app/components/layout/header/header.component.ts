import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

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
    public authService: AuthService
  ) { }
  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.isAuth = this.authService.getIsAuth();
    this.authSub = this.authService.getAutListen()
      .subscribe(aut => {
        this.isAuth = aut;
      });
  }

  login() {
    this.dlg.open(LoginComponent)
  }


  logout() {
    this.authService.logout()
  }
  
  ngOnDestroy() {
    this.authSub.unsubscribe()
  }
}
