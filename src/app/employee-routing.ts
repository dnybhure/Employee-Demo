import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from 'src/app/app.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeeaddComponent } from 'src/app/employee/employeeadd/employeeadd.component';



const appRoutes:Routes=[
    {path:'',component:EmployeeComponent},
    {path:'employeeadd', component:EmployeeaddComponent},
    {path:'employeeadd/:id', component:EmployeeaddComponent}
]
 
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]

})
export class ApproutingModule{

}