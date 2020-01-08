import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  createUser(em: string, ps: string) {
    // console.log('eml', em); console.log('pse', ps);
    const user: User = {correo: em, contraseña: ps};
    this.http.post('http://localhost:8090/user/signup', user)
    .subscribe(res => {
      console.log('rs', res);
    });
  }
}
