import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = '';
    if (localStorage.getItem('auth_token') != null && localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== 'undefined') {
      token = JSON.parse(localStorage.getItem('auth_token')).tokenValue;
    }

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })
    ;

    return next.handle(req);
  }
}
