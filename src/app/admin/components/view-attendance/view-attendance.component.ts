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
  ngOnInit(){
   

  
try {
  this.api.getStudentAttendance().subscribe({
    next:(res)=>{
      console.log(res,"attendance")
      this.Date_date=res.ddistinct_dates
  
  console.log(this.Date_date,"datae wuhdwsdijwdpowdpmkwd")
    },error:(err)=>{
    console.log(err)
    }
    
    
  })
  
} catch (error) {
  console.log(error)
} finally{
  if(this.Date_date.status=='success'){
this.datas=this.Date_date.distinct_dates
console.log(this.datas,"array data")
  }
}


  }

  // fun(){
  //  console.log(this.Date_date )
  // }

  // date_date(item:any){
  //  this.datas=this.api.getStudentDailyActivities(item).subscribe((res)=>{
  //    this.studentsActivities=[res.daily_updates[0]]

  //    console.log(this.studentsActivities);
  //  })
  }

 

