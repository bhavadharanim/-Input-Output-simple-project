import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url="http://localhost:3000/profile";

  //Install npm install -D json-server
  //Run this command json-server --watch db.json

  constructor(private http:HttpClient) { }

  public value=[
    {"id":"1","Name":"Bhavadharani"},
    {"id":"2","Name":"Alagammai"},
    {"id":"2","Name":"Dhanuripraba"}
  ];
  getEmployeeDetail()
  {
    console.log("working");
    return[
      {"id":"1","Name":"Bhavadharani"},
      {"id":"2","Name":"Alagammai"},
      {"id":"2","Name":"Dhanuripraba"}
    ]
    
  }
  getValue():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
  postValue(){
    return this.http.post(this.url,this.value);
  }
}
