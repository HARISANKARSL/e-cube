import { StudentsoperationsService } from './../../../services/studentsoperations.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeitemsService } from 'src/app/services/homeitems.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent {
  batch:any=[]
constructor(private api:StudentsoperationsService,private active:ActivatedRoute,private route:Router){}
ngOnInit(){

 this.api.getAllClassDetails().subscribe({
  next:(res)=>{
    console.log(res)
    this.batch=res.class_details
    console.log(res)
  },error:(err)=>{
    console.log(err)
  }
 })
}
getById(id:any){
this.route.navigate(['/admin/students-details',id])
}
}
