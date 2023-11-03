import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { AddexamComponent } from '../shared/addexam/addexam.component';

import * as XLSX from 'xlsx'
import { TestService } from 'src/app/services/test.service';
import { MatSort } from '@angular/material/sort';
import { Toast, ToastrService } from 'ngx-toastr';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentInfo } from 'src/app/models/res.model';
@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent implements OnInit{

allBatch:any
  excelData:any


  constructor(private api:StudentsoperationsService,private dialog:MatDialog,private toast:ToastrService, private _form:FormBuilder){
  
   this.formData = this._form.group({});
  }

file:any
data:[]=[]
studentInfo:StudentInfo[] =[]
studentData:any;
subjects_arry:any;
students:any;
exam_name:string = "";
// studentForm:FormGroup;
formData:FormGroup;
selectedBatch:any;



  
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
// addItem(){
//   (this.formData.get('marks') as FormArray).push(
//     this._form.control(null)
//   )
// }

addItem(subject: string) {
  const marks = this.formData.get(`${subject}.marks`) as FormArray;
  marks.push(this._form.control(null));
}

getMarks(): AbstractControl[] {
  return(<FormArray> this.formData.get('marks')).controls
}
  getval() {
    this.data = this.selectedBatch;
    console.log("getVal", this.data,"name>>>",this.exam_name)

    //http://13.200.38.169:8002/register/admin/student/class/get/all/?batch_year=2024&class_name=PLUS ONE&division=A
    this.api.getStudentData(this.data).subscribe((result: any) => {
      console.log("manu>>", result)
      this.studentData = result;
      this.students = this.studentData.all_users;
      this.studentData.all_users.forEach((res: any) => {
        this.subjects_arry = res.subjects.split(',')
      })
      console.log("test>>",this.subjects_arry)
     
      this.students.forEach((res:any)=>{
        let obj:any ={};
        this.subjects_arry.forEach((sub:any)=>{
            obj[sub] = 0
          })
          obj.admission_no = res.admission_no;
          obj.exam_name = this.exam_name;
          //obj.sub = this.subjects_arry;
          console.log("obj",obj);
          this.studentInfo.push(obj);
      });
      console.log("this.studentInfo",this.studentInfo);
  })
}

addMark(data:any){
  console.log("hgt",data.elements.this.subjects_arry[0]);

}
}