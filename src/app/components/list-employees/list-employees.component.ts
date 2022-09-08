import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addEmployeeDialog(): void{
    this.dialog.open(AddEmployeesComponent,{
      width: '550px',
      data:"rigth click",
      disableClose: true
    });
  }
}
