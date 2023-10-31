import { Component } from '@angular/core';
import { map } from 'rxjs';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent {
constructor(private api:StudentsoperationsService){}
subjects: string[] = [];
data:any[]=[]
allData:any
ngOnInit() {


 this.api.getMarks().subscribe((res)=>{
  this.allData=res.results
    
  })
  this.api.getMarks().pipe(
    map((res) => res.results.map((result:any) => result.subject)) 
    
  ).subscribe({
    next: (filteredSubjects) => {
      this.subjects = filteredSubjects; 
      
    }
  });
}
getMarks(subject:any){
this.data=this.allData.filter((res:any)=>{
  this.allData.forEach((res:any)=>{
    const subjects = res.subject;
    if(subject==res.subject){
      return res
     }
  })

})
console.log()
}
}

