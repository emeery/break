import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// manipula la solicitud y agrega el token en el header authorization
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServicio: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Observable<HttpEvent<any>>
    const jwt = this.authServicio.getToken();
    // console.log('jwt', jwt);
    const authSolicitud = req.clone({
      // setHeaders: { authorization: `Bearer ${this.authServicio.getToken()}`}
      headers: req.headers.set('authorization', 'Bearer ' + jwt)
    });
    console.log('utt', authSolicitud.headers);
    return next.handle(authSolicitud);
  }
}
