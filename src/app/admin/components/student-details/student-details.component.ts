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
students_details:any
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
   console.log(item.class_name)
if(this.dataID==item.class_name){
  this.students_details=this.dataID

  
  return item
}


   })
 
    },error:(err)=>{
      
    }
   })
  }
  openfun(id:any){
console.log(id,"id")
  }
}
