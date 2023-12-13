import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  anouncement:any
  anouncementData:any;
  anouncementDate:any
  showVal:string=""
  hideButton: boolean = false;

  constructor(private api:StudentsoperationsService,private toast:ToastrService){}
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
updateValue(data:any){
  this.showVal=data
  this.anouncementData=""
  this.anouncementDate=""
  if (data === "create") {
    this.hideButton = true;
  } else {
    this.hideButton = true;
  }

}
createAnouncement(){


  let  setdata = {
    upload_date:this.anouncementDate,
    announcement:this.anouncementData
  };
  this.api.addAnouncement(setdata).subscribe({
    next:(res)=>{
      if(res){
        this.toast.success("succesfully Created")
      
          location.reload()
        
      }
     
 
    
      
    },error:(err)=>{
      this.toast.error(err.message,"something went wrong")
    }
  })
}


delete(data:any) {
  this.anouncementData=data.announcement;
  this.anouncementDate=data.upload_date
  console.log(data,"dlt")
 let  setdata = {
 
    upload_date: this.anouncementDate,
    announcement:this.anouncementData 
   
  };
  
  
 
  this.api.deleteAnouncement( setdata ).subscribe({
    next: (res) => {
      console.log(res);
this.toast.success("Successfully deleted","Delete Success")
location.reload();
    },
    error: (error) => {
      console.error(error);
    }
  });
}
getValues(data:any,edit:any){
  this.showVal=edit
  
  this.anouncementData=data.announcement
  this.anouncementDate=data.upload_date
if(this.showVal=="edit"){
  this.hideButton = false;
  } else {
    this.hideButton = true;
  }


}
updateData(){

 let  setdata = {
    upload_date: this.anouncementDate,
    announcement:this.anouncementData 
   
  };
  this.api.updateAnouncement(setdata).subscribe({
    next:(res)=>{
    if(res){
      this.toast.success("succesfully updated")
     
        location.reload()
      
    }
    },error:(err)=>{
      this.toast.error(err.message,"something went wrong")
    }
  })
}



}