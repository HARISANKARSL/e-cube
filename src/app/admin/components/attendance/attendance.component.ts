import { Component } from '@angular/core';
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
  constructor(private api:StudentsoperationsService,private test:TestService){}
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
    uploadData(){
      this.test.addMark(this.excelData).subscribe({
        next:(res)=>{
         
        }
      })
    }
    ngOnInit(){
      this.api.getAllClassDetails().subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
    }
    
}
