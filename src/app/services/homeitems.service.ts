import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeitemsService {

  constructor(private http:HttpClient) { }
  getAllCard(){
    return this.http.get<any>('assets/Api/home.json')
  }
}
