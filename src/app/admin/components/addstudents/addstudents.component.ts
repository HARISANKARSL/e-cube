import { Component, TrackByFunction, inject } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';
import { ToastrService } from 'ngx-toastr';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent {
  data:any[]=[]
allClassDetails:any=[]

  addStudents!:FormGroup
  keywords = ['Physics', 'Chemistry', 'Maths'];
  formControl = new FormControl(['angular']);

  announcer = inject(LiveAnnouncer);
trackByFn: TrackByFunction<string> | undefined;
  constructor(private route :Router,private api:StudentsoperationsService,private toast:ToastrService){}
ngOnInit(){
  
  this.addStudents=new FormGroup({
    name:new FormControl("",Validators.required),
    phone_no:new FormControl("",Validators.required),


    school_name:new FormControl("",Validators.required),
    admission_no:new FormControl("",Validators.required),
 
    subjects: new FormControl(this.keywords, Validators.required),
    class_name:new FormControl("",Validators.required),
    division:new FormControl("",Validators.required),
    batch_year:new FormControl("",Validators.required),
  })

  this.api.getAllClassDetails().subscribe({
    next:(res)=>{
    
      this.allClassDetails=res.class_details
 
    }
  })
}
getval(item:any){

  this.data =this.allClassDetails.filter((res:any)=>{ 
  console.log(res,"respo")
    if(res.class_name == item ){
      return res;
    }
  });
}
addStudent(){

this.api.addNewStudent(this.addStudents.value).subscribe({
  next:(res)=>{

    if(this.addStudents.valid){
      this.toast.success('Successfully created','Success')
    this.addStudents.reset()
    }
    
  },error:(err)=>{
  
    this.toast.error(err.message,'Error')

  }

})

}
removeKeyword(keyword: string) {
  const index = this.keywords.indexOf(keyword);
  if (index >= 0) {
    this.keywords.splice(index, 1);

    this.announcer.announce(`removed ${keyword}`);
  }
}

add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  // Add our keyword
  if (value) {
    this.keywords.push(value);
  }

  // Clear the input value
  event.chipInput!.clear();
}
}
