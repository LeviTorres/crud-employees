import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';
import { FormControl } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/employees';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  public search = new FormControl();

  public employees: Array<Employee> = [];

  public changeColumnDepartament: boolean = true;

  public changeColumnCode: boolean = true;

  public changeColumnStatus: boolean = true;

  public changeColumnCarnet: boolean = true;

  public changeColumnPosition: boolean = true;

  public changeColumnMotherSurname: boolean = true;

  public changeColumnLastName: boolean = true;

  public changeColumnName: boolean = true;

  constructor(
    public dialog: MatDialog,
    private _employee: EmployeesService
  ) { }

  ngOnInit(): void {
    this._employee.getEmployees().subscribe((data:Array<Employee>) => {
      this.employees = data;
  });
  }

  public addEmployeeDialog(): void{
    this.dialog.open(AddEmployeesComponent,{
      width: '550px',
      data:"rigth click",
      disableClose: true
    });
  }

  public changeDepartament() {
    let list = this.employees;
    this.changeColumnDepartament = !this.changeColumnDepartament;
    if (!this.changeColumnDepartament) {
      function sortArray(x: Employee, y: Employee) {
        if (x.departament < y.departament) { return -1; }
        if (x.departament > y.departament) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.departament < y.departament) { return 1; }
        if (x.departament > y.departament) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changeStatus() {
    let list = this.employees;
    this.changeColumnStatus = !this.changeColumnStatus;
    if (!this.changeColumnStatus) {
      function sortArray(x: Employee, y: Employee) {
        if (x.status < y.status) { return -1; }
        if (x.status > y.status) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.status < y.status) { return 1; }
        if (x.status > y.status) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changeMotherSurname() {
    let list = this.employees;
    this.changeColumnMotherSurname = !this.changeColumnMotherSurname;
    if (!this.changeColumnMotherSurname) {
      function sortArray(x: Employee, y: Employee) {
        if (x.mother_surname < y.mother_surname) { return -1; }
        if (x.mother_surname > y.mother_surname) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.mother_surname < y.mother_surname) { return 1; }
        if (x.mother_surname > y.mother_surname) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changeLastName() {
    let list = this.employees;
    this.changeColumnLastName = !this.changeColumnLastName;
    if (!this.changeColumnLastName) {
      function sortArray(x: Employee, y: Employee) {
        if (x.last_name < y.last_name) { return -1; }
        if (x.last_name > y.last_name) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.last_name < y.last_name) { return 1; }
        if (x.last_name > y.last_name) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changeName() {
    let list = this.employees;
    this.changeColumnName = !this.changeColumnName;
    if (!this.changeColumnName) {
      function sortArray(x: Employee, y: Employee) {
        if (x.name < y.name) { return -1; }
        if (x.name > y.name) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.name < y.name) { return 1; }
        if (x.name > y.name) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changePosition() {
    let list = this.employees;
    this.changeColumnPosition = !this.changeColumnPosition;
    if (!this.changeColumnPosition) {
      function sortArray(x: Employee, y: Employee) {
        if (x.position < y.position) { return -1; }
        if (x.position > y.position) { return 1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    } else {
      function sortArray(x: Employee, y: Employee) {
        if (x.position < y.position) { return 1; }
        if (x.position > y.position) { return -1; }
        return 0;
      }
      const s = list.sort(sortArray);
      this.employees = s;
    }
  }

  public changeCode(): void {
    let list = this.employees;
    this.changeColumnCode = !this.changeColumnCode;
    if (!this.changeColumnCode) {
      list.sort((a: Employee, b: Employee) => Number(a.code_employee) - Number(b.code_employee));
      this.employees = list;
    } else {
      list.sort((a: Employee, b: Employee) => Number(b.code_employee) - Number(a.code_employee));
      this.employees = list;
    }
  }

  public changeCarnet(): void {
    let list = this.employees;
    this.changeColumnCarnet = !this.changeColumnCarnet;
    if (!this.changeColumnCarnet) {
      list.sort((a: Employee, b: Employee) => Number(a.carnet) - Number(b.carnet));
      this.employees = list;
    } else {
      list.sort((a: Employee, b: Employee) => Number(b.carnet) - Number(a.carnet));
      this.employees = list;
    }
  }

}
