import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }
  getToken() { return this.token; }
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
      this.router.navigate(['/tweets']);
    });
  }
}
