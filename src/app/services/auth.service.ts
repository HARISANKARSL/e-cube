import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  adminLogin(auth:any){
    return this.http.post<any>("http://13.200.38.169:8002/admin_auth/login/",auth)
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null
   
  }

}
