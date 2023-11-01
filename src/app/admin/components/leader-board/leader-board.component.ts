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
  subject:any;
  subjects_arry:any[]=[]
constructor(private api:StudentsoperationsService){}
ngOnInit(){

  this.api.getAllClassDetails().subscribe((res)=>{
    this.allBatch=res.class_details
  
   
    
    

   
    
    
  })
 



}
getval(item:any){

  this.data =this.allBatch.filter((res:any)=>{ 
    if(res.class_name == item ){
      return res;
    }
  });

  this.data.forEach((res)=>{
    this.subjects_arry =res.subjects.split(',')
  })



  }

  subjects(batch:any){
    this.api.getLeaderBoard(this.data,batch).subscribe({
      next:(res)=>{
        this.allData=res.leaderboard
       
      }
    })
  }

}
