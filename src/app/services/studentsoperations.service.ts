import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsoperationsService {

  constructor( private http:HttpClient) { }
  getAllClassDetails(){
    return this.http.get<any>('http://13.200.38.169:8002/register/admin/get/class/details/'  )
  }
  
  getAllStudents(){
    return this.http.get<any>('http://13.200.38.169:8002/register/admin/student/get/all/')
  }
  addNewStudent(data:any){
    return this.http.post<any>('http://13.200.38.169:8002/register/admin/student/update/ind/',data)
  }
  getStudentsById(){
    return this.http.get<any>('http://13.200.38.169:8002/register/admin/student/get/ind/')
  }
  addNewBatch(data:any){
    return this.http.post<any>('http://13.200.38.169:8002/register/admin/add/class/details/',data)
  }

}
