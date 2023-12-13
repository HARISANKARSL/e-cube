import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-videoclasses',
  templateUrl: './videoclasses.component.html',
  styleUrls: ['./videoclasses.component.css']
})
export class VideoclassesComponent {
  classname:any;
  division:any;
  year:any;
  id:any
  classes:any
  subjects:any
  sub_id:number=0;
  sub:string="";
  link:any;
  date:string="";
  data:any[]=[]
constructor(private api:StudentsoperationsService,private toast:ToastrService){}

ngOnInit(){
  this.api. getAllClassDetails().subscribe({
    next:(res)=>{
     this.classes=res.class_details
     
    }
  })
}


getval1(data:any){this.classname=data;

  this.data =this.classes.filter((res:any)=>{ 
    console.log(res,"respo")
      if(res.class_name == data ){
        return res;
      }
    });
}
getval2(data:any){this.division=data;}
getval3(data:any){this.year=data;}


  submittt(){
    this.api.getRecordLists(this.classname,this.division,this.year).subscribe({
      next:(res)=>{
        this.subjects=res.recordings
       console.log(res)
      }
    })
  }
 



  getid(data:any){
    this.sub_id =data.id
    this.sub=data.subject
   
  }

  upload(){

    let data ={
      class_name: this.classname,
      batch_year: this.year,
      division: this.division,
      subject: this.sub,
      date: this.date,
      recording_link:this.link
    
    }

console.log(data,"ssas")

    this.api.addVideos(data).subscribe({
      next:(res)=>{
        
        console.log(res)
          this.toast.success("success")
          setTimeout(() => {
            location.reload()
          }, 2000);
          
      },error:(err)=>{
        console.log(err)
        this.toast.error("something went wrong")
      }
    }) 
   }


}
