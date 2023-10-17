import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.css']
})
export class AddexamComponent {
  constructor(private ref: MatDialogRef<AddexamComponent>,public toast:ToastrService){}
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
console.log(this.addBatchForm.value)


}

}
