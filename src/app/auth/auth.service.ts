import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
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
  createUser(name: string, em: string, ps: string) {
    const user: User = {nombre : name, correo: em, contraseña: ps};
    this.http.post('http://localhost:8090/user/signup', user)
    .subscribe(res => {
      console.log('rs', res);
    });
  }
  loginUser(em: string, ps: string) {
    const user = {correo: em, contraseña: ps};
    this.http.post<{token: string}>('http://localhost:8090/user/login', user)
    .subscribe(res => {
      const token = res.token;
      this.token = token;
      // console.log('to', this.token);
      if (token) {
        this.autListen.next(true);
        this.estaAut = true;
      }
    });
    // this.router.navigate(['/tweets']);
  }
  logout() {
    this.token = null;
    this.estaAut = false;
    this.autListen.next(false);
    this.router.navigate(['/home']);
  }
}
