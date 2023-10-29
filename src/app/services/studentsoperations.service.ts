import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsoperationsService {
  addDailyClassDetails(excelData: any) {
    throw new Error('Method not implemented.');
  }
  setValue = [];
  updateStudentValue=new BehaviorSubject <string>("");
  req: any;
  formData:any
  setindividualdata:any[]=[]
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
    console.log(this.setValue,"set")
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
    console.log(data,"updated")
  }
  getstudentUpdatedValue() {
    return this.updateStudentValue.asObservable();
  }
// bulk student activities
  getBUlkdata(data:File,item:any){
     this.formData = new FormData();
  this.formData.append("media_file", data);
 
  console.log(item)
  return this.http.post<any>(`http://13.200.38.169:8002/student_daily_activities/daily-activities/add/bulk/?batch_year=${item.batch_year}&class_name=${item.class_name}&division=${item.division}`,this.formData)
  }
  // attendance bulk
   addBulkAtendance(data:File,item:any){
 
    this.formData = new FormData();
  this.formData.append("media_file", data);

  return this.http.post<any>(`http://13.200.38.169:8002/student_attendance/attendance/add/bulk/?batch_year=2024&class_name=PLUS ONE&division=A&date=09/10/2024`,this.formData)

   }

   getStudentActivities(data:any){
    console.log(data,"id")
    return this.http.get<any>(`http://13.200.38.169:8002/student_daily_activities/admin/get/dates/daily-activities/?user_id=${data.id}`).pipe(map((res:any)=>{return res}));

   }
   setuserdata(data: any) {
    this.setindividualdata=(data);
   
  }

  getUserData() {
    
    return this.setindividualdata
    
  }

getStudentDailyActivities(data:any){
  console.log(data)
return this.http.get<any>(`http://13.200.38.169:8002/student_daily_activities/admin/get/daily-activities/?user_id=${data.id}&date=${data.date}`)
  }


   
}
