import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent {
  issubject:boolean=true
  allBatch:any
  allData:any[]=[]
  data:any[]=[]
  lederboardData:any
  subject:any
constructor(private api:StudentsoperationsService){}
ngOnInit(){

  this.api.getAllClassDetails().subscribe((res)=>{
    this.allBatch=res.class_details
    
   this.allBatch.map((item:any,index:any)=>{
    this.subject=item.subjects.split(',')
    console.log(this.subject,"sdsdd")
    
   })
   
    
    
  })
 


  this.api.getLeaderBoard().subscribe({
    next:(res)=>{
      this.allData=res.leaderboard
      console.log(this.allData,"leader")
    }
  })
}
getval(classlist:any,division:any){
 
this.lederboardData={
  "divsion":division,
"classs_name":classlist
}
console.log(this.lederboardData,"ldr")

  }

}
