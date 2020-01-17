import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../components/error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dlg: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsje = 'ocurrió un error';
        // console.log('e', err.error.e.message);
        if (err.error.e.message) {
          errorMsje = err.error.e.message;
        }
        this.dlg.open(ErrorComponent, {data: {unmensaje: errorMsje} });
        return throwError(err);
      })
    );
  }
}
