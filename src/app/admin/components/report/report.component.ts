import { Component } from '@angular/core';
import { HomeitemsService } from 'src/app/services/homeitems.service';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  studentvaludebyid:any
  getStudents=[]
  allReport:any =[]
  testData:[]=[]
  allData:any
  dataArray:any[]=[]
  
constructor(private api:HomeitemsService,private service:StudentsoperationsService){}
ngOnInit(){
 
  this.api.getAllCard().subscribe((res)=>{
this.allReport=res.report

  })
  

  this.allData=this.service.getUserData() 
 this.dataArray = [this.allData];


}
getReports(item:any,items:any){
  
  if(items.title ==="Daily Class Details"){
      this.service.getStudentActivities(item.id).subscribe((res)=>{

})
  }

}


}
