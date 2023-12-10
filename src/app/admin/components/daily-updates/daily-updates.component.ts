import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css']
})
export class DailyUpdatesComponent {
  classname:any;
  division:any;
  year:any;
  id:any
  classes:any
  subjects:any
constructor(private api:StudentsoperationsService){}

ngOnInit(){
  this.api. getAllClassDetails().subscribe({
    next:(res)=>{
     this.classes=res.class_details
     console.log(this.classes)
    }
  })
}


getval1(data:any){this.classname=data;}
getval2(data:any){this.division=data;}
getval3(data:any){this.year=data;}


  submittt(){
    this.api. getLinks(this.classname,this.division,this.year).subscribe({
      next:(res)=>{
        this.subjects=res.class_links
       console.log(this.subjects)
      }
    })
  }
  upload(){
  console.log(this.id)
  }
}
