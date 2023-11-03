import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent {
  @Input() students: any;
  form!: FormGroup;
  // @Output() formSubmit: EventEmitter<any> = new EventEmitter();
 constructor(){}
 ngOnInit(): void {
  
 }
 onSubmit(index: number) {
  // Emit the form data of the specified object back to the parent component
  // console.log(this.students[index])
  // this.formSubmit.emit(this.students[index]);
}
}
