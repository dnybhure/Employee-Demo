import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/employee.interface';
import {MatTableDataSource,MatDialog} from '@angular/material';

import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import {ConfirmComponent,ConfirmDialogModel} from 'src/app/Dialog/dialog.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: MatTableDataSource<Employee>
  
  displayedColumns: any[] = ['ID', 'Name', 'Designation', 'Salary','options'];
  constructor(private employeeService:EmployeeService,
              private router:Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.employeeService.employeeData)
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editRecord(id){
    console.log("id",id);
    this.router.navigate(['employeeadd',id]);
  }
  deleteRecord(item){
    
   const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      maxWidth: "400px",
      data: dialogData,
       disableClose: true 
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let index: number = this.employeeService.employeeData.findIndex(d => d === item);
        console.log(index);
        this.employeeService.employeeData.splice(index,1);
        
        
        this.dataSource = new MatTableDataSource(this.employeeService.employeeData);
       
      }
    });
    


  }
}
