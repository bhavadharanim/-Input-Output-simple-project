import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'; 
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { SingleEmployeeDetailComponent } from './single-employee-detail/single-employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    SingleEmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
