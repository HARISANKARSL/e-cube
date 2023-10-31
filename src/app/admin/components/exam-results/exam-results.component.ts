import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { AddexamComponent } from '../shared/addexam/addexam.component';

import * as XLSX from 'xlsx'
import { TestService } from 'src/app/services/test.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent {

allBatch:any
  excelData:any


  constructor(private api:StudentsoperationsService,private dialog:MatDialog,private test:TestService){}
  displayedColumns = ['slno', 'name', 'subject', 'mark'];
  pagination:number=1;
itemsPerPage:number=6  
file:any
data:[]=[]
  ELEMENT_DATA:any;
 
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
        console.log(res,"data")
      },error:(err)=>{
        console.log(err)
      }
    })
    
  
  }
  getval(data:any){
    this.data=data
    
    }
 
}
