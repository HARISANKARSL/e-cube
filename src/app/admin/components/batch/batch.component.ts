import { MatDialog } from '@angular/material/dialog';
import { StudentsoperationsService } from './../../../services/studentsoperations.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PopupComponent } from '../shared/popup/popup.component';


@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent {
  batch:any=[]
  show:boolean=true
  alldata:[]=[]
  updated:any
  
constructor(private api:StudentsoperationsService,private active:ActivatedRoute,private route:Router,private dialog:MatDialog){}
ngOnInit(){

 this.api.getAllClassDetails().subscribe({
  next:(res)=>{
   
    
    this.batch=res.class_details
    if(this.batch.length===0){
      this.show=false
    }
  },error:(err)=>{
    console.log(err)
  }
 })
}
getById(id:any){
this.route.navigate(['/admin/students-details',id])

}

openDialog(){
  this.dialog.open(PopupComponent, {
   width:'40%',
   height:'60vh',
    enterAnimationDuration:"1000ms",
    exitAnimationDuration:'1000ms'
  });}
  update(id:any){
    this.openDialog()
    let current=this.batch.find((p:any)=>{
    return p.id===id
   
  })
  this.api.setUpdatedValue(current)

}
}
