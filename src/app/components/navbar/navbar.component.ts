import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private auth:AuthService,private route:Router){}
logout(){
  this.auth.logout()
  this.route.navigateByUrl('/sap-login')
}
}
