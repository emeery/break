import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
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
  canActivate(
    route: ActivatedRouteSnapshot,
    estado: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const estaAut = this.autService.getEstaAut();
    if (!estaAut) {
      this.router.navigate(['/home']);
    }
    return estaAut;
  }
}
