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
}
addBatch(){
this.api.addNewBatch(this.addBatchForm.value).subscribe({
  next:(res)=>{
    
    if(this.addBatchForm.valid ){
this.toast.success("Successfully created class group and associated feature group","Success")
this.closepopup()
this.addBatchForm.reset()
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

}
