import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../components/layout/error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dlg: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err)
        let errorMensaje = 'ocurrió un error';
        if (err.error.msg) { errorMensaje = err.error.msg; }
        this.dlg.open(ErrorComponent, {data: {msg: errorMensaje} });
        return throwError(err);
      })
    );
  }
}
