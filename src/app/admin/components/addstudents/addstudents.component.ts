import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent {
allClassDetails:any=[]
  toppings = new FormControl('');
  toppingList:string[] = ['Maths', 'Physics', 'Chemistry', 'Biology', 'Accountancy', 'English'];
  addStudents!:FormGroup
  constructor(private route :Router,private api:StudentsoperationsService,private toast:ToastrService){}
ngOnInit(){
  this.addStudents=new FormGroup({
    name:new FormControl("",Validators.required),
    phone_no:new FormControl("",Validators.required),


    school_name:new FormControl("",Validators.required),
    admission_no:new FormControl("",Validators.required),
    subjects:new FormControl("",[Validators.required]),

    class_name:new FormControl("",Validators.required),
    division:new FormControl("",Validators.required),
    batch_year:new FormControl("",Validators.required),
  })

  this.api.getAllClassDetails().subscribe({
    next:(res)=>{
    
      this.allClassDetails=res
      console.log(this.allClassDetails,"asds")
    }
  })
}
addStudent(){

this.api.addNewStudent(this.addStudents.value).subscribe({
  next:(res)=>{
    if(this.addStudents.valid){
      this.toast.success('Successfully created','Success')
    this.addStudents.reset()
    }
    
  },error:(err)=>{
    this.toast.error('field cant be empty','Error')

  }
})
}
}
