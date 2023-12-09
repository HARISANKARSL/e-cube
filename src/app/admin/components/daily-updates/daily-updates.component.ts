import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css']
})
export class DailyUpdatesComponent {
  classes:any
constructor(private api:StudentsoperationsService){}

ngOnInit(){
  this.api.getLinks().subscribe({
    next:(res)=>{
     this.classes=res.class_links
     console.log(this.classes)
    }
  })
}

}
