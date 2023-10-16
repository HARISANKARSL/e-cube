import { Component } from '@angular/core';
import { HomeitemsService } from 'src/app/services/homeitems.service';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  getStudents=[]
  allReport:any =[]
constructor(private api:HomeitemsService,private service:StudentsoperationsService){}
ngOnInit(){
  this.service.getStudentsById().subscribe({
    next:(res)=>{
console.log(res.id)
    },error:(err)=>{
console.log(err)
    }
  })
  this.api.getAllCard().subscribe((res)=>{
this.allReport=res.report
console.log(this.allReport)
  })
}
}
