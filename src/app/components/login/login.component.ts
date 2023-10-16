import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginForm!:FormGroup
constructor(private fb:FormBuilder,private route :Router,private auth:AuthService){}


ngOnInit(){
  this.loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required])
  })
}

get f(){
  return this.loginForm.controls;
}

login(){
this.auth.adminLogin(this.loginForm.value).subscribe({
  next:(res)=>{
   
  localStorage.setItem("token",res.access_token)
    this.route.navigate(['/admin/admin-home-page'])
   },
   error:(err)=>{
   
    console.log(err)
   }
   

  

})
}
}
