import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeDetail()
  {
    console.log("working");
    return[
      {"id":"1","Name":"Bhavadharani"},
      {"id":"2","Name":"Alagammai"},
      {"id":"2","Name":"Dhanuripraba"}
    ]
    
  }
}
