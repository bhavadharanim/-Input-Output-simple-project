import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  public Employee=[
    {"id":"1","Name":"Bhavadharani"},
      {"id":"2","Name":"Alagammai"},
      {"id":"2","Name":"Dhanuripraba"}
  ];
  public ServiceSharingEmployeeDetail=[];


  ngOnInit() {
    // this.ServiceSharingEmployeeDetail=this.employee.getEmployeeDetail();
    // console.log(this.ServiceSharingEmployeeDetail);
  }
  getEmp(){
    console.log(this.Employee);
    this.ServiceSharingEmployeeDetail=this.employee.getEmployeeDetail();
    console.log(this.ServiceSharingEmployeeDetail);

  }

}
