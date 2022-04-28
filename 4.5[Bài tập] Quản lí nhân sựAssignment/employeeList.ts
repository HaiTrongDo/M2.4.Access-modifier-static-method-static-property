import {Employee} from "./employee";

export class EmployeeList {
    employeeList: Employee[] = []

    constructor() {
    }

    displayEmployeeList(): void {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i].firstName)
        }
    }

    addingEmployee(...employeeObj: Employee[]): void {
        console.log(...employeeObj)
        this.employeeList.push(...employeeObj)
    }

    displayEmployeeListFullDetail(): void {
        for (let i = 0; i < this.employeeList.length; i++) {
            console.log(this.employeeList[i])
        }
    }

    deleteEmployee(index:number): void {
        this.employeeList.splice(index, 1)
    }

    editingEmployeeDetail(index,
                          firstName: string,
                          lastname: string,
                          dateOfBirth: number,
                          address: string,
                          companyAddress: string): Employee {
        let currentEmployee = this.employeeList[index]
        currentEmployee.firstName = firstName;
        currentEmployee.dateOfBirth = dateOfBirth;
        currentEmployee.address = address;
        currentEmployee.companyAddress = companyAddress;
        return currentEmployee;
    }

}


// Hiển thị danh sách nhân sự
// Thêm một nhân sự mới
// Xem chi tiết thông tin nhân sự
// Xoá một nhân sự
// Chỉnh sửa thông tin nhân sự