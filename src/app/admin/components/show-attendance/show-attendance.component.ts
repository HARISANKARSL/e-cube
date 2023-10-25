import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent {
 
 
allBatch:any
excelData:any


constructor(private api:StudentsoperationsService,private test:TestService){}


ELEMENT_DATA:any;

  ngOnInit(){
    this.api.getAllClassDetails().subscribe((res)=>{
      this.allBatch=res.class_details
      console.log(this.allBatch)
      
    })
    this.test.getMark().subscribe((res:any)=>{
    const convert=res.flat()
      this.ELEMENT_DATA=convert
      console.log(this.ELEMENT_DATA)
      
    })
    
  }
}

