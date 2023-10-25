import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  constructor(private http: HttpClient) {}
  getAllClassDetails() {
    return this.http.get<any>(
      'http://13.200.38.169:8002/register/admin/get/class/details/'
    );
  }

  getAllStudents() {
    return this.http.get<any>(
      'http://13.200.38.169:8002/register/admin/student/get/all/'
    );
  }
  addNewStudent(data: any) {
    return this.http.post<any>(
      `http://13.200.38.169:8002/register/admin/student/individual/?batch_year=${data.batch_year}&class_name=${data.class_name}&division=${data.division}&subjects=${data.subjects}`,data
    );
  }
  getStudentsById() {
    return this.http.get<any>(
      'http://13.200.38.169:8002/register/admin/student/get/ind/'
    );
  }
  addNewBatch(data: any) {
    return this.http.post<any>(
      'http://13.200.38.169:8002/register/admin/add/class/details/',
      data
    );
  }
  updateBatch(id: any) {
    return this.http.put<any>(
      'http://13.200.38.169:8002/register/admin/update/class/details/',
      id
    );
  }
  setUpdatedValue(data: any) {
    this.setValue = data;
  }
  getUpdatedValue() {
    return this.setValue;
  }
  deleteEmployee(data: any) {
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
}
