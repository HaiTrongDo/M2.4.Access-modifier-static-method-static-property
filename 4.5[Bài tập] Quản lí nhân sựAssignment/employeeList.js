"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeList = void 0;
var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
        this.employeeList = [];
    }
    EmployeeList.prototype.displayEmployeeList = function () {
        for (var i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i].firstName);
        }
    };
    EmployeeList.prototype.addingEmployee = function () {
        var _a;
        var employeeObj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employeeObj[_i] = arguments[_i];
        }
        console.log.apply(console, employeeObj);
        (_a = this.employeeList).push.apply(_a, employeeObj);
    };
    EmployeeList.prototype.displayEmployeeListFullDetail = function () {
        for (var i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i]);
        }
    };
    EmployeeList.prototype.deleteEmployee = function (index) {
        this.employeeList.splice(index, 1);
    };
    EmployeeList.prototype.editingEmployeeDetail = function (index, firstName, lastname, dateOfBirth, address, companyAddress) {
        var currentEmployee = this.employeeList[index];
        currentEmployee.firstName = firstName;
        currentEmployee.dateOfBirth = dateOfBirth;
        currentEmployee.address = address;
        currentEmployee.companyAddress = companyAddress;
        return currentEmployee;
    };
    return EmployeeList;
}());
exports.EmployeeList = EmployeeList;
// Hiển thị danh sách nhân sự
// Thêm một nhân sự mới
// Xem chi tiết thông tin nhân sự
// Xoá một nhân sự
// Chỉnh sửa thông tin nhân sự
