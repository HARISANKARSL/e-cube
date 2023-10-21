import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsoperationsService {
setValue=[]
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
  updateBatch(id:any){
    return this.http.put<any>('http://13.200.38.169:8002/register/admin/update/class/details/',id)
  }
  setUpdatedValue(data:any){
this.setValue=data

  }
  getUpdatedValue(){
    return this.setValue
  }
  deleteEmployee(id: number){
    return this.http.delete(`http://13.200.38.169:8002/register/admin/delete/class/details/`, { responseType: 'text'  });
  }



}
