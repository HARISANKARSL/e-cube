import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  dataArray:any[]=[]
  allData:any
  id:any
  constructor(private api:StudentsoperationsService,private route:Router,private toast:ToastrService){}
  ngOnInit(){
    this.allData=this.api.getUserData() 
 this.dataArray = [this.allData];

  }
  editStudent(data:any){
this.id=data
  }
  deleteStudent(data: any) {
    this.id = data;
    let setData = {
      id: this.id
    };
  
    
      this.api.deleteStudentIndividual( setData ).subscribe({
        next: (res) => {
          console.log(res);
this.toast.success("Successfully deleted","Delete Success")
this.route.navigate(["admin/batch"]);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
    
  
  
}
