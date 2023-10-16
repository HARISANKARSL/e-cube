import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
{
  path:"",redirectTo:"/sap-login",pathMatch:"full"
},

{
  path:"sap-login",component:LoginComponent
},
{
  path:"admin",loadChildren:()=> import("./admin/admin.module").then(m=>m.AdminModule),canActivate:[AuthGuard]
},
{
  path:"**",redirectTo:'/sap-login',pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
