import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginForm!:FormGroup
constructor(private fb:FormBuilder,private route :Router,private auth:AuthService,private toast:ToastrService){}


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
  next:async (res)=>{
   this.toast.success(' Success',"Login Success")
  localStorage.setItem("token",res.access_token)
    res=await this.route.navigate (['/admin/admin-home-page'])
   },
   error:(err)=>{
    this.toast.error("Invalid Email Or Password","Login Failed")
   
    console.log(err)
   }
   

  

})
}
}
