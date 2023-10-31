import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent {

  constructor(private api:StudentsoperationsService){}
  Date_date:any;
  datas:any[]=[]
  studentsActivities:any[]=[]
  presentDays:any
  absentDays:any
  ngOnInit(){
   

  

  this.api.getStudentAttendance().subscribe({
    next:(res)=>{
    
      this.Date_date=res.distinct_dates
      console.log(this.Date_date,"attendance")
  
    },error:(err)=>{
    console.log(err)
    }
    
    
  })
  



  }
  date_date(item:any){
    this.api.getAttendnace(item).subscribe({
      next:(res)=>{
      
      this.presentDays=res.attendance_result.present_days
      this.absentDays=res.attendance_result.absent_days
      console.log(this.presentDays)
      }
    })
  console.log(item,"s8dhwsdhwdw item")
   }
   


  }

 

