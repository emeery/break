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
  private estaAut = false;
  private autListen = new Subject<boolean>();
  constructor(
    private http: HttpClient, private router: Router
    ) { }
  getToken() { return this.token; }
  getAutListen() { return this.autListen.asObservable(); }
  getIsAut() {return this.estaAut; }
  createUser(nm: string, em: string, ps: string) {
    const user: User = {nombre: nm, correo: em, contraseña: ps};
    console.log('u', user);
    this.http.post<{mensaje: string}>(
      'http://localhost:8090/user/signup', user)
      .subscribe(res => {
        console.log('ress', res); }, e => { console.log('mot', e); });
  }
  loginUser(em: string, ps: string) {
    const user = {correo: em, contraseña: ps};
    return this.http.post<{mensaje: string, token: string}>(
      'http://localhost:8090/user/login', user)
    .subscribe(res => {
      const token = res.token;
      this.token = token;
      if (token) {
        this.estaAut = true;
        this.autListen.next(true);
      }
      this.router.navigate(['/tweets']);
    }, e => {  });
  }
  logout() {
    this.token = null;
    this.estaAut = false;
    this.autListen.next(false);
    this.autListen.next(false);
    this.router.navigate(['/start']);
  }
}
