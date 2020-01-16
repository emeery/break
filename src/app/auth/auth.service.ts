import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private estaAutListen = new Subject<boolean>();
  private estaAut = false;
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  getToken() { return this.token; }
  getEstaAut() { return this.estaAut; }
  getEstaAutListen() { return this.estaAutListen.asObservable(); }
  createUser(em: string, ps: string) {
    // console.log('eml', em); console.log('pse', ps);
    const user: User = {correo: em, contraseña: ps};
    this.http.post('http://localhost:8090/user/signup', user)
    .subscribe(res => {
      console.log('rs', res);
    });
  }
  loginUser(em: string, ps: string) {
    const user = {correo: em, contraseña: ps};
    this.http.post<{mensaje: string, token: string}>(
      'http://localhost:8090/user/login', user)
    .subscribe(res => {
      const token = res.token;
      this.token = token;
      if (token) {
        this.estaAut = true;
        this.estaAutListen.next(true);
      }
      this.router.navigate(['/tweets']);
    });
  }
  logout() {
    this.token = null;
    this.estaAut = false;
    this.estaAutListen.next(false);
    this.router.navigate(['/home']);
  }
}
