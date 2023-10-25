import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { TestService } from 'src/app/services/test.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-daily-class-updates',
  templateUrl: './daily-class-updates.component.html',
  styleUrls: ['./daily-class-updates.component.css']
})
export class DailyClassUpdatesComponent {
  constructor(private api:StudentsoperationsService,private http:HttpClient,private test:TestService){}
  excelData:any
  class_details:any
  uploadImage(event:any){
let file = event.target.files[0];
let fileReader= new FileReader();
fileReader.readAsBinaryString(file)
fileReader.onload=(e)=>{
  var workbook=XLSX.read(fileReader.result,{type:'binary'});
  var sheetName=workbook.SheetNames;
  this.excelData= XLSX.utils.sheet_to_json(workbook.Sheets[sheetName[0]])
  const participantsArray = this.excelData.participants;
  console.log(participantsArray)
}

}
ngOnInit(){

  this.api.getAllClassDetails().subscribe({
    next:(res)=>{
    this.class_details=res.class_details
console.log(this.class_details)

  }
  })
}




  
}
