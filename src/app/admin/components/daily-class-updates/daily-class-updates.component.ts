import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { TestService } from 'src/app/services/test.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-daily-class-updates',
  templateUrl: './daily-class-updates.component.html',
  styleUrls: ['./daily-class-updates.component.css']
})
export class DailyClassUpdatesComponent {
  file:any
  constructor(private api:StudentsoperationsService,private http:HttpClient,private test:TestService,private toast:ToastrService){}
  excelData:any
  class_details:any
  data:[]=[]

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
uploadData(){
  this.api.getBUlkdata(this.file,this.data).subscribe({
    next:(res)=>{
   this.toast.success(res.message,"Success")
   
    },error:(err)=>{
      this.toast.error(err.message,"Failed")
    }
  })
}
getval(data:any){
this.data=data

}



  
}
