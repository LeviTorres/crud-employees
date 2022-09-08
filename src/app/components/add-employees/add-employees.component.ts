import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionManagers } from '../../interfaces/optionManagers';
import { OptionMentors } from '../../interfaces/optionMentors';
import { Employee } from '../../interfaces/employees';
import { EmployeesService } from '../../services/employees.service';
import { GeneralService } from 'src/app/services/general.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  public sameCode: boolean = false;

  public sameCarnet: boolean = false;

  public sameName: boolean = false;

  public employees: Array<Employee> = [];

  public form: FormGroup = new FormGroup({
    codeControl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ]),
    nameControl: new FormControl('', [Validators.required]),
    lastNameControl: new FormControl('', [Validators.required]),
    motherSurnameControl: new FormControl('', [Validators.required]),
    positionControl: new FormControl('', [Validators.required]),
    departamentControl: new FormControl('', [Validators.required]),
    managerControl: new FormControl('', [Validators.required]),
    mentorControl: new FormControl('', [Validators.required]),
    carnetControl: new FormControl('',[
      Validators.required,
      Validators.pattern(/^\d+$/)
    ])
  });

  public optionManagers: Array<OptionManagers> = [
    {
      name: 'GERENTE DE ADMON INTERNACIONAL'
    }
  ];

  public optionMentors: Array<OptionMentors> = [
    {
      name: 'Gloria Abigail Villegas Salazar',
      position: 'CONTADOR GENERAL'
    }
  ];

  constructor(
    private _employee: EmployeesService,
    private _general: GeneralService,
    private _dialogRef: MatDialogRef<AddEmployeesComponent>
  ) { }

  ngOnInit(): void {
    this._employee.getEmployees().subscribe((data:Array<Employee>) => {
        this.employees = data;
    })
    this.form.controls['codeControl'].valueChanges.subscribe((inputCode:string) =>{
      this.validateCodeEmployee(inputCode);
    });
    this.form.controls['carnetControl'].valueChanges.subscribe((inputCarnet:string) =>{
      this.validateCarnet(inputCarnet);
    });
  }

  public saveData(): void{
    this.validateName();
    if(this.sameName){
      this._general.alertError('Nombre ya utilizado','');
      return;
    }

    const element: Employee = {
      code_employee: this.form.controls['codeControl'].value,
      name: this.form.controls['nameControl'].value,
      last_name: this.form.controls['lastNameControl'].value,
      mother_surname: this.form.controls['motherSurnameControl'].value,
      position: this.form.controls['positionControl'].value,
      departament: this.form.controls['departamentControl'].value,
      manager: this.form.controls['managerControl'].value,
      mentor: this.form.controls['mentorControl'].value,
      carnet: this.form.controls['carnetControl'].value,
      status: 'ACTIVO'
    }

    this._employee.addEmployee(element);
    this._dialogRef.close();
    this._general.alertSuccess('Empleado creado existosamente', '');
    console.log(element);
  }

  public validateCodeEmployee(inputCode: string): void{

    const validateCode = this.employees.some((employee: Employee) => {
      return employee.code_employee.trim() === inputCode.trim()
    });

    if(validateCode){
      this.sameCode = true;
    }else {
      this.sameCode = false;
    }
  }

  public validateCarnet(inputCarnet: string): void{
    const validateCarnet = this.employees.some((employee: Employee) => {
      return employee.carnet.trim() === inputCarnet.trim()
    });

    if(validateCarnet){
      this.sameCarnet = true;
    }else {
      this.sameCarnet = false;
    }
  }

  public validateName(): any {
    const fullName = `${this.form.controls['nameControl'].value.toLocaleLowerCase().trim()}${this.form.controls['lastNameControl'].value.toLocaleLowerCase().trim()}${this.form.controls['motherSurnameControl'].value.toLocaleLowerCase().trim()}`;
    console.log('fullName', fullName);
    const validatefullName = this.employees.some((employee: Employee) => {
      return `${employee.name.toLocaleLowerCase().trim()}${employee.last_name.toLocaleLowerCase().trim()}${employee.mother_surname.toLocaleLowerCase().trim()}` === fullName.toLocaleLowerCase().trim()
    });

    if(validatefullName){
      this.sameName = true;
    }else {
      this.sameName = false;
    }

  }


}
