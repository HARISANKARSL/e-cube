import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injct:Injector,private route:Router) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let authService=this.injct.get(AuthService)
  let authreq=request
  authreq=this.addToken(request,authService.isLoggedIn())
return next.handle(authreq).pipe(
  catchError(errorData=>{
   if(errorData.status===401){
return this.handlerefreshToken(request,next)
   }
    return throwError(errorData)
  })
)
}
handlerefreshToken(request: HttpRequest<any>,next:HttpHandler){
  let authService=this.injct.get(AuthService)
  return authService.generateRefreshToken().pipe(
    switchMap((data:any)=>{
authService.saveTokens(data);
return next.handle(this.addToken(request,data.access_token))
    }),
    catchError(errordata=>{
      authService.logout()
      return throwError(errordata)
    })
  )
}

addToken(request: HttpRequest<any>,token:any){
return request.clone({headers:request.headers.set ('Autherization','bearer')})
}
 
}
