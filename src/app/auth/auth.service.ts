import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + '/user/';
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
    this.http.post<{mensaje: string}>(
      BACKEND_URL + 'signup', user)
      .subscribe(res => e => { this.autListen.next(false); });
  }
  loginUser(em: string, ps: string) {
    const user = {correo: em, contraseña: ps};
    return this.http.post<{mensaje: string, token: string}>(
      BACKEND_URL + 'login', user)
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
    this.router.navigate(['/start']);
  }
}
