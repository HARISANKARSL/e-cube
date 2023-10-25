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
 
  
  ELEMENT_DATA:any;
 
  openDialog(){
    this.dialog.open(AddexamComponent, {
    
     height:'60vh',
      enterAnimationDuration:"500ms",
      exitAnimationDuration:'1000ms'
    });}
    

   
    uploadImage(event:any){
  let file = event.target.files[0];
  let fileReader= new FileReader();
  fileReader.readAsBinaryString(file)
  fileReader.onload=(e)=>{
    var workbook=XLSX.read(fileReader.result,{type:'binary'});
    var sheetName=workbook.SheetNames;
    this.excelData= XLSX.utils.sheet_to_json(workbook.Sheets[sheetName[0]])
  }
  }
  ngOnInit(){
    this.api.getAllClassDetails().subscribe((res)=>{
      this.allBatch=res.class_details
      console.log(this.allBatch)
      
    })
    this.test.getMark().subscribe((res:any)=>{
    const convert=res.flat()
      this.ELEMENT_DATA=convert
      console.log(this.ELEMENT_DATA)
      
    })
    
  }
  
 
}
