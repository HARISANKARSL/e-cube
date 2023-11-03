import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="http://13.200.38.169"
  constructor(private http:HttpClient,private route:Router) { }

  adminLogin(auth:any){
    return this.http.post<any>(this.baseUrl+`/admin_auth/login/`,auth)
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null
   
  }
  logout(){
    localStorage.clear()
    this.route.navigateByUrl('/sap-login')
  }
  getToken(){
    return localStorage.getItem('token')||'';
  }
  getRefreshToken(){
    return localStorage.getItem('refreshtoken')||'';
  }
  generateRefreshToken(){
    let input={
'access_token':this.getToken(),
'refresh_token':this.getRefreshToken()
    }
    return this.http.post(this.baseUrl+`admin_auth/login/'+'refresh`,input)
  }
  saveTokens(tokendata:any){
    localStorage.setItem("token",tokendata.access_token)
  localStorage.setItem('refreshtoken',tokendata.refresh_token)
  }

}
