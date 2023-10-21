import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeitemsService } from 'src/app/services/homeitems.service';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  displayedColumns: string[] = ["id","name","phone_no","subjects","report"]
dataID:any
  dataSource:any=[]
  studentData=[]
  constructor(private api:StudentsoperationsService,private active:ActivatedRoute){}
  ngOnInit(){
    
   this.active.paramMap.subscribe((params)=>{
   this.dataID =params.get('id')
   
  
   })
  this.api.getAllStudents().subscribe({
    next:(res)=>{

     this.dataSource=res.all_users
   this.studentData=this.dataSource.filter((item:any)=>{
if(this.dataID==item.class_name){
  return item
}


   })
   console.log(this.dataSource)
    },error:(err)=>{
      console.log(err)
    }
   })
  }
}
