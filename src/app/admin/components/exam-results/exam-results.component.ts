import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { AddexamComponent } from '../shared/addexam/addexam.component';

import * as XLSX from 'xlsx'
import { TestService } from 'src/app/services/test.service';
import { MatSort } from '@angular/material/sort';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent {

allBatch:any
  excelData:any


  constructor(private api:StudentsoperationsService,private dialog:MatDialog,private toast:ToastrService, private _form:FormBuilder){
    this.studentForm = this._form.group({
      
    })
  }

file:any
data:[]=[]
studentData:any;
subjects_arry:any;
students:any;
exam_name:string = "";
studentForm:FormGroup;
  openDialog(){
    this.dialog.open(AddexamComponent, {
    
     height:'60vh',
      enterAnimationDuration:"500ms",
      exitAnimationDuration:'1000ms'
    });}
    

   
    onFileSelected(event: any) {
      this.file = event.target.files[0];
  
     
    
   }
  ngOnInit(){
    this.api.getAllClassDetails().subscribe((res)=>{
      this.allBatch=res.class_details
      
      
    })
   
  }
  uploadMarks(){
    this.api.addBulkMarks(this.file,this.data).subscribe({
      next:(res)=>{
       this.toast.success(res.message,'Success')
      

      },error:(err)=>{
        this.toast.error(err.message,'Failed')
      }
    })
    
  
  }
  getval(data: any) {
    this.data = data
    console.log("getVal", data)

    //http://13.200.38.169:8002/register/admin/student/class/get/all/?batch_year=2024&class_name=PLUS ONE&division=A
    this.api.getStudentData(data).subscribe((result: any) => {
      console.log("manu>>", result)
      this.studentData = result;
      this.students = this.studentData.all_users;
      this.studentData.all_users.forEach((res: any) => {
        this.subjects_arry = res.subjects.split(',')
      })
      console.log("test>>",this.subjects_arry)
    })


  }
  
  addMark(){

}
}