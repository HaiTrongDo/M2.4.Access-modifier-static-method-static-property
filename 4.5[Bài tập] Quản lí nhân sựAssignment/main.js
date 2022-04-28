"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var employeeList_1 = require("./employeeList");
var employeeList = new employeeList_1.EmployeeList();
var employeeHai = new employee_1.Employee("Hai", "Do", 1991, "Ha Noi", "Thanh Xuan");
var employeeThinh = new employee_1.Employee("Thinh", "Le", 2000, "Ha Nam", "Thanh Xuan");
var employeeAn = new employee_1.Employee("An", "Nguyen", 2001, "Hai Duong", "Thanh Xuan");
employeeList.addingEmployee(employeeHai, employeeThinh, employeeAn);
// employeeList.addingEmployee(employeeThinh)
// employeeList.addingEmployee(employeeAn)
console.log(employeeList);
