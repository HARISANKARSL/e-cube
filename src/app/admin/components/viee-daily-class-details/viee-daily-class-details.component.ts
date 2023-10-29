import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-viee-daily-class-details',
  templateUrl: './viee-daily-class-details.component.html',
  styleUrls: ['./viee-daily-class-details.component.css']
})
export class VieeDailyClassDetailsComponent {
  Date_date:any;
constructor(private api:StudentsoperationsService){}
   
   ngOnInit(){
    
 this.api.getStudentActivities_getdate().subscribe((res)=>{
  this.Date_date =res;
 })

   }

   fun(){
    console.log(this.Date_date )
   }

   date_date(item:any){
    this.api.getStudentDailyActivities(item).subscribe((res)=>{
      console.log(res);
    })
   }
}
