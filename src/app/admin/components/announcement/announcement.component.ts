import { Component } from '@angular/core';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  anouncement:any
  anouncementData:string="";
  anouncementDate:any


  constructor(private api:StudentsoperationsService){}
ngOnInit(){
  
this.api.getAnouncement().subscribe({
  next:(res)=>{
    this.anouncement=res.announcements
   
   console.log(res)
  },error:(err)=>{
    console.log(err)
  }
})
}
delete(data:any) {
  this.anouncementData=data.announcement;
  this.anouncementDate=data.upload_date
 let  setdata = {
    upload_date: this.anouncementDate,
    announcement:this.anouncementDate 
   
  };
  console.log(this.anouncementData);
  console.log(this.anouncementDate)
  console.log(setdata)

  this.api.deleteAnouncement(setdata).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    }
  });
}
getValues(data:any){
  this.anouncementData=data.announcement
  this.anouncementDate=data.upload_date


}
updateData(items:any){
  this.anouncementData=items.announcement;
  this.anouncementDate=items.upload_date
 let  setdata = {
    upload_date: this.anouncementDate,
    announcement:this.anouncementDate 
   
  };
  this.api.updateAnouncement(setdata).subscribe({
    next:(res)=>{
      console.log(res)
    }
  })
}

}