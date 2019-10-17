import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  public Employee=[
    {"id":"1","Name":"Bhavadharani"},
      {"id":"2","Name":"Alagammai"},
      {"id":"2","Name":"Dhanuripraba"}
  ];

  public ServiceSharingEmployeeDetail=[];
  public value:any=[];

  public name="bhavadharanim";

  public ID=3;

  ngOnInit() {
    // this.ServiceSharingEmployeeDetail=this.employee.getEmployeeDetail();
  }
  getEmp(){
    console.log(this.Employee);
    this.ServiceSharingEmployeeDetail=this.employee.getEmployeeDetail();
    console.log(this.ServiceSharingEmployeeDetail);

    this.employee.getValue()
    .subscribe(data=>{
      this.value=data
      console.log(data.length+"  "+this.value.Name);
    });
    
    console.log("Http request value.....",this.employee.getValue)


    this.employee.postValue()
    .subscribe(data=>{
      this.value=data;
      console.log("posting the value"+data);
    })
    
  }

  passValue(){
      return this.name;
  }
  
  

}
