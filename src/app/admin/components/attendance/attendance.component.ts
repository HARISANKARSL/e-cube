import { Component } from '@angular/core';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  excelData:any
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
}
