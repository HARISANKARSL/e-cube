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
    this.myForm = new FormGroup({
      selectedBatch: new FormControl(''), // You can set initial values here
      exam_name: new FormControl(''),
    });
  
  }

file:any
data:[]=[]
studentInfo:StudentInfo[] =[]
studentData:any;
subjects_arry:any;
students:any;
exam_name:string = "";
myForm:FormGroup;
batch:any
division:any;
selectedBatch:any;
allDatas:any[]=[]


  
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




  getval() {
    this.data = this.myForm.value.selectedBatch;
    this.batch=this.data;
    this.division=this.batch.class_name;
    console.log(this.division.class_name,"sdsdsdsd")
    this.exam_name = this.myForm.value.exam_name;
    console.log("getVal", this.data)
    
    this.api.getStudentData(this.data).subscribe((result: any) => {
      console.log("manu>>", result)
      this.studentData = result.all_users;
     
      console.log(this.studentData,"test")
      
      this.studentData.forEach((student: any) => {
      
        this.subjects_arry = student.subjects.split(',').map((subject: string) => {
          return subject.toLowerCase();
        });
      });

    

      
      console.log("test>>",this.subjects_arry)
     
      this.studentData.forEach((res:any)=>{
        let obj:any ={};
          obj.name = res.name;
          obj.exam_name = this.exam_name;
          obj.sub = this.subjects_arry;
          console.log("obj",obj);
          this.studentInfo.push(obj);
      });
      console.log("this.studentInfo",this.studentInfo);
  })
}

  addMark(data: any) {
    let datas: any = {}
    let info: any = []
    for (let i = 0; i < this.subjects_arry.length + 2; i++) {
      info.push(data.target[i].value);
    }
    console.log("gfh", info);
    let arra = this.subjects_arry;
    for (let i = 0, j = 2; j < info.length; i++, j++) {
      let sub = this.subjects_arry[i];

      datas[sub] = info[j];
    }
    datas.admission_no = info[0];
    datas.exam_name = info[1];
    console.log("gfdfh", datas);
    this.allDatas.push(datas);
  }
upload(){
  console.log(this.allDatas)
this.api.upload_sudent_mark(this.allDatas,this.data).subscribe((res:any)=>{
    console.log(res)
})

}

}
