import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-viee-daily-class-details',
  templateUrl: './viee-daily-class-details.component.html',
  styleUrls: ['./viee-daily-class-details.component.css']
})
export class VieeDailyClassDetailsComponent {
constructor(private api:StudentsoperationsService){}
  //  ngOnInit(){
  //   this.api.getStudentDailyActivities().subscribe({
  //     next:(res)=>{}, error:(err)=>{
  //       console.log(err)
  //     }
  //   })
  //  }
}
