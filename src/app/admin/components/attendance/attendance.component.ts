import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { TestService } from 'src/app/services/test.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  excelData:any
  allbatch:any
 uploadDatas:any=[]
 file:any
 class_details:any
 data:[]=[]
  constructor(private api:StudentsoperationsService,private toast:ToastrService){}
 
  onFileSelected(event: any) {
    this.file = event.target.files[0];
   
  
 }
    
    
 ngOnInit(){
  this.api.getAllClassDetails().subscribe({
    next:(res)=>{
    this.class_details=res.class_details


  }
  })
}
uploadAttendnace(){
  this.api.addBulkAtendance(this.file,this.data).subscribe({
    next:(res)=>{
      this.toast.success(res.status,"success")
    },error:(err)=>{
    this.toast.error(err.message,"Failed")
    }
  })
  

}
getval(data:any){
  this.data=data
  
  }

    
}
