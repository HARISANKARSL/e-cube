import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent {

  toppings = new FormControl('');
  toppingList:string[] = ['Maths', 'Physics', 'Chemistry', 'Biology', 'Accountancy', 'English'];
  addStudents!:FormGroup
  constructor(private fb:FormBuilder,private route :Router,private api:StudentsoperationsService){}
ngOnInit(){
  this.addStudents=new FormGroup({
    name:new FormControl("",Validators.required),
    phone_no:new FormControl("",Validators.required),


    school_name:new FormControl("",Validators.required),
    admission_no:new FormControl("",Validators.required),
    subjects:new FormControl("",[Validators.required]),

    class_name:new FormControl("",Validators.required),
    division:new FormControl("",Validators.required),
    batch_year:new FormControl("",[Validators.required]),
  })
}
addStudent(){
this.api.addNewStudent(this.addStudents.value).subscribe({
  next:(res)=>{
    console.log(this.addStudents.value)
  },error:(err)=>{
    console.log(err)
  }
})
}
}
