import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsoperationsService {
  Data_data=new BehaviorSubject <any>([]);
attendanceDate:any
addBulkMark:any
  setValue = [];
  updateStudentValue=new BehaviorSubject <string>("");
  req: any;
  formData:any
  formDatas:any
  setindividualdata:any[]=[];
  id:any;

  
  constructor(private http: HttpClient) {}

// get all students
getAllStudents() {
  return this.http.get<any>(
    'http://13.200.38.169:8002/register/admin/student/get/all/'
  );
}
// get all class details

  getAllClassDetails() {
    return this.http.get<any>(
      'http://13.200.38.169:8002/register/admin/get/class/details/'
    );
  }
// add student
  addNewStudent(data: any) {
    return this.http.post<any>(
      `http://13.200.38.169:8002/register/admin/student/individual/?batch_year=${data.batch_year}&class_name=${data.class_name}&division=${data.division}&subjects=${data.subjects}`,data
    );
  }

  // add batch
  addNewBatch(data: any) {
    return this.http.post<any>(
      'http://13.200.38.169:8002/register/admin/add/class/details/',
      data
    );
  }
  // update batch
  updateBatch(id: any) {
   
    return this.http.put<any>(
      `http://13.200.38.169:8002/register/admin/update/class/details/`,id
      
      
    );}
  setUpdatedValue(data: any) {
    this.setValue = data;
  
  }
  getUpdatedValue() {

    return this.setValue;
  }
  // delet batch
  deleteStudent(data: number):Observable<any> {
    return this.http.delete(
      `http://13.200.38.169:8002/register/admin/delete/class/details/?id=${data}`
    );
  }
  addExamResult(data:any){
    return this.http.post<any>(`http://13.200.38.169:8002/student_exam_result/exam-result/add/?batch_year=2023&class_name=Plus One&division=A`,data)
  }
  setUpdatedstudentDetails(data: any) {
    this.updateStudentValue.next(data);

  }
  getstudentUpdatedValue() {
    return this.updateStudentValue.asObservable();
  }
// bulk student activities
  getBUlkdata(data:File,item:any){
     this.formData = new FormData();
  this.formData.append("media_file", data);
 

  return this.http.post<any>(`http://13.200.38.169:8002/student_daily_activities/daily-activities/add/bulk/?batch_year=${item.batch_year}&class_name=${item.class_name}&division=${item.division}`,this.formData)
  }
  // attendance bulk
   addBulkAtendance(data:File,item:any){
 
    this.formDatas = new FormData();
  this.formDatas.append("attendance_file", data);

  return this.http.post<any>(`http://13.200.38.169:8002/student_attendance/attendance/add/bulk/?batch_year=${item.batch_year}&class_name=${item.class_name}&division=${item.division}&date=${item.date}`,this.formDatas)

   }
// add students marks bulk
addBulkMarks(data:File,item:any){

  this.addBulkMark=new FormData()
  this.addBulkMark.append("exam_results_file", data);

  return this.http.post<any>(`http://13.200.38.169:8002/student_exam_result/exam-result/add/bulk/?batch_year=${item.batch_year}&class_name=${item.class_name}&division=${item.division}`,this.addBulkMark)
}


   getStudentActivities(data:any){

    this.id =data;
     
    return this.http.get<any>(`http://13.200.38.169:8002/student_daily_activities/admin/get/dates/daily-activities/?user_id=${data}`).
    pipe(map((res:any)=>{  this.Data_data.next(res) ; }));
   }


// get stutednt activites date

   getStudentActivities_getdate(){
     return this.Data_data.asObservable();
   }
   
   setuserdata(data: any) {
    this.setindividualdata=(data);
   
  }

  getUserData() {
    
    return this.setindividualdata
    
  }
// get student daily activities
getStudentDailyActivities(data:any){
return this.http.get<any>(`http://13.200.38.169:8002/student_daily_activities/admin/get/daily-activities/?user_id=${this.id}&date=${data}`).pipe(map((res)=>{
  return res;
}))
  }

  // leader board
  getLeaderBoard(alldata:any,sub:any){

 


    return this.http.get<any>(`http://13.200.38.169:8002/student_leaderboard/admin/get_leaderboard/?batch_year=${alldata[0].batch_year}&class_name=${alldata[0].class_name}&division=${alldata[0].division}&subject=${sub}`)
     
      }




      
getStudentAttendance(){

  return this.http.get<any>(`http://13.200.38.169:8002/student_attendance/admin/attendance/get/status/?user_id=${this.id.id}`)


 
}


getAttendnace(data:any){
  return this.http.get<any>(`http://13.200.38.169:8002/student_attendance/admin/attendance/get/?user_id=${this.id.id}&month_year_number=${data}`)
}

getMarks(){
  return this.http.get<any>(`http://13.200.38.169:8002/student_exam_result/get/admin/exam-result/?user_id=${this.id.id}`)
}

getStudentData(data:any){
  return this.http.get<any>(`http://13.200.38.169:8002/register/admin/student/class/get/all/?batch_year=${data.batch_year}&class_name=${data.class_name}&division=${data.division}`)
}
}
