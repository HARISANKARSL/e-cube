import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { AddexamComponent } from '../shared/addexam/addexam.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import * as XLSX from 'xlsx'
import { TestService } from 'src/app/services/test.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent {

allBatch:any
  excelData:any
  apiData: any=[];


  constructor(private api:StudentsoperationsService,private dialog:MatDialog,private test:TestService,private http:HttpClient){}
  displayedColumns = ['slno', 'name', 'subject', 'mark'];
  pagination:number=1;
itemsPerPage:number=6  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  ELEMENT_DATA:any;
 
  openDialog(){
    this.dialog.open(AddexamComponent, {
     width:'40%',
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
   
      
    })
    this.http.get('http://localhost:3000/posts').subscribe((data: any) => {
      this.apiData = data.posts[0]; // Modify this to access the appropriate data in your JSON response
      console.log(this.apiData)
    });
  }
  
 
}
