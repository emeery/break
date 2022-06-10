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
  private isAuth = false;
  private autListen = new Subject<boolean>();
  constructor(
    private http: HttpClient, private router: Router
    ) { }
  getToken() { return this.token; }
  getAutListen() { return this.autListen.asObservable(); }
  getIsAuth() {return this.isAuth; }
  loginUser(em: string, ps: string) {
    const user = {email: em, password: ps};
    return this.http.post<{user: string, token: string}>(
      BACKEND_URL + 'signin', user)
    .subscribe(res => {
      const token = res.token;
      this.token = token;
      if (token) {
        this.isAuth = true;
        this.autListen.next(true);
        this.setStorageAuth(token);
      }
      this.router.navigate(['/tweets']);
    }, e => { this.autListen.next(false) });
  }
  autUserAuth() {
    const dataAut = this.getStorageAuth()
    if(!dataAut) return;
    const token = dataAut.token;
    if(token) {
      this.token = dataAut.token;
      this.isAuth = true;
      this.autListen.next(true)
      this.router.navigate(['/tweets'])
    }
  }
  setStorageAuth(token: string) {
    localStorage.setItem('token',token)
  }
  getStorageAuth() {
    const t = localStorage.getItem('token')
    if(!t) return;
    return {token: t}
  }
  cleanStorageAuth() {
    localStorage.removeItem('token')
  }
  logout() {
    this.token = null;
    this.isAuth = false;
    this.autListen.next(false);
    this.cleanStorageAuth();
    this.router.navigate(['/start']);
  }
}
