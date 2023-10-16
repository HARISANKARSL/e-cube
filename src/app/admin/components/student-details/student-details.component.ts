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

  displayedColumns: string[] = ["id","name","phone_no","email_id","subjects","report"]
dataID:any
  dataSource:any=[]
  studentData=[]
  constructor(private api:StudentsoperationsService,private active:ActivatedRoute){}
  ngOnInit(){
   this.active.paramMap.subscribe((params)=>{
   this.dataID =params.get('id')
   console.log(this.dataID)
   console.log(this.dataID)
   })
  this.api.getAllStudents().subscribe({
    next:(res)=>{
 
     this.dataSource=res.all_users
   this.studentData=this.dataSource.filter((item:any)=>{
this.dataID.includes(item.class_name)
// console.log(item.class_name,"list")

   })
   console.log(this.dataSource)
    },error:(err)=>{
      console.log(err)
    }
   })
  }
}
