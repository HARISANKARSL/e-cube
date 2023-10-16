import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-cube';
  showHeader:boolean=false
constructor(private route:Router){
  route.events.subscribe((val)=>{
    if(val instanceof NavigationEnd){
      if(val.url=='/sap-login'   ){
        this.showHeader=false
      }else{
        this.showHeader=true
      }
    }
  })
}


}
