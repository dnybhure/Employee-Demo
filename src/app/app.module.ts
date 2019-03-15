import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApproutingModule } from './employee-routing';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from './material-module';
import {EmployeeService } from 'src/app/employee-service.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeaddComponent } from './employee/employeeadd/employeeadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from 'src/app/Dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeaddComponent,
    ConfirmComponent
  ],
  entryComponents: [ConfirmComponent],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ApproutingModule,
    DemoMaterialModule
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
