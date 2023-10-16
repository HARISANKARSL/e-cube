import { Component } from '@angular/core';
import { HomeitemsService } from 'src/app/services/homeitems.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  item:any=[]
constructor( private api:HomeitemsService){

}
ngOnInit(){
  this.api.getAllCard().subscribe((res)=>{
   this.item=res.homesec
  })
}
}
