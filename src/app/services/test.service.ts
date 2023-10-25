import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  addMark(data:any){
    return this.http.post<any>('https://attendance-cz5n.onrender.com/attendance',data)
  }
  getMark(){
    return this.http.get<any>('https://attendance-cz5n.onrender.com/attendance')
  }

}
