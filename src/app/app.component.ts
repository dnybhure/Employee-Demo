import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/employee.interface';
import {MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'crud';
  
  
  
  constructor(){
  }
  
    
}
