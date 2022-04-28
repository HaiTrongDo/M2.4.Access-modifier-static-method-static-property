import {Employee} from "./employee";
import {EmployeeList} from "./employeeList";

let employeeList = new EmployeeList()
let employeeHai = new Employee("Hai","Do", 1991, "Ha Noi","Thanh Xuan")
let employeeThinh = new Employee("Thinh","Le", 2000, "Ha Nam","Thanh Xuan")
let employeeAn = new Employee("An","Nguyen", 2001, "Hai Duong","Thanh Xuan")
employeeList.addingEmployee(employeeHai,employeeThinh,employeeAn)
// employeeList.addingEmployee(employeeThinh)
// employeeList.addingEmployee(employeeAn)

console.log(employeeList)