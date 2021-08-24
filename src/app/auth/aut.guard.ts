import {
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private autService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const estaAut = this.autService.getIsAuth();
    if (!estaAut) {
      this.router.navigate(['/']); // bg
    }
    return estaAut;
  }
}
