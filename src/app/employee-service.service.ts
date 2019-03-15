import {Employee} from './employee.interface'
export class EmployeeService {
  
employeeData:Employee[]=[
{
  id:4,name:"John", designation:"Developer",salary:25000,address:"Street no AB12 "
},
{
  id:5,name:"smith", designation:"Developer",salary:25000,address:"Street no AB12 "
},
{
  id:6,name:"Thomas", designation:"Developer",salary:25000,address:"Street no AB12 "
},
{
  id:7,name:"Isabella", designation:"Function",salary:65000,address:"Street no AB12 "
},
{
  id:8,name:"Olivia", designation:"Manager",salary:55000,address:"Street no AB12 "
},
{
  id:9,name:"Asher", designation:"Consultant",salary:75000,address:"Street no AB12 "
},
{
  id:10,name:"Jack", designation:"Tester",salary:25000,address:"Street no AB12 "
},
]
  constructor() { }

  getAllEmployeedata(){
    return this.employeeData;
  }
  addEmployee(name:string,designation:string,salary:number,address:string){
    
    this.employeeData.push({id:this.generateID(),name:name,designation:designation,salary:salary,address:address});
  }
  generateID(){
    return Math.floor((Math.random() * 100) + 1);
  }
  
  getEmployee(id: number) {
    const emp = this.employeeData.find(
      (s) => {
        return s.id === id;
      }
    );
    return emp;
  }

  updateServer(id: number, empInfo: {id:number,name: string, designation: string,salary:number,address:string}) {
    const employee = this.employeeData.find(
      (s) => {
        return s.id === id;
      }
    );
    if (employee) {
      employee.id = empInfo.id;
      employee.name = empInfo.name;
      employee.designation=empInfo.designation;
      employee.salary=empInfo.salary;
      employee.address=empInfo.address;
    }
  }
  
}
