import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(private ref: MatDialogRef<PopupComponent>,private api:StudentsoperationsService,public toast:ToastrService){}
  addBatchForm!:FormGroup
  heading:any
  show:boolean=true
  hide:boolean=false
updateValue:any
  closepopup() {
    this.ref.close('Closed using function');
    this.ref.disableClose = true;
  }
ngOnInit(){
this.addBatchForm=new FormGroup({
  class_name:new FormControl("",Validators.required),
  division:new FormControl("",Validators.required),
  subjects:new FormControl("",Validators.required),
  batch_year:new FormControl("",Validators.required),
})
this.addUpdate()
this.heading="ADD BATCH"
}
addBatch(){
this.api.addNewBatch(this.addBatchForm.value).subscribe({
  next:(res)=>{
    
    if(this.addBatchForm.valid ){
this.toast.success("Successfully created class group and associated feature group","Success")

this.closepopup()

setInterval(() => {
  this.addBatchForm.reset()
}, 5000);

this.reloadpagefunc()
    }else{
      
    }
    console.log(this.addBatchForm.value)
  },error:(err)=>{
   
    this.toast.error(err.message)
  }
})
}
reloadpagefunc(){
  return  window.location.reload();
}
addUpdate(){
  this.updateValue=this.api.getUpdatedValue()

  if(this.updateValue){
    this.hide=true
    this.show=false
    let classNameControl = this.addBatchForm.get('class_name');
    let divison = this.addBatchForm.get('division');
    let subjects = this.addBatchForm.get('subjects');
    let batchYear = this.addBatchForm.get('batch_year');
    if (classNameControl) {
      classNameControl.setValue(this.updateValue.class_name);
      
    } if(divison){
      divison.setValue(this.updateValue.division);
    }if(subjects){
      subjects.setValue(this.updateValue.subjects); 
    } if(batchYear){
      batchYear.setValue(this.updateValue.batch_year); 
    }
    
    else {
      console.error('class_name FormControl not found');
    }
  }
 
}

}
