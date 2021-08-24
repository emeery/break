import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
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
    const authSolicitud = req.clone({
      headers: req.headers.set('authorization', 'Bearer ' + jwt)
    });
    // console.log(authSolicitud.headers);
    return next.handle(authSolicitud);
  }
}
