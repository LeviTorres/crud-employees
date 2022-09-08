import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDocs, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public data: any = [];

  constructor(private firestore: Firestore) { }

  public async addEmployee(employee: Employee){
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }

 public getEmployees(){
  let employeeRef = collection(this.firestore, 'employees');
  return collectionData(employeeRef, {idField: 'id'}) as Observable<Employee[]>;
 }

  public deleteEmployee(employee: Employee) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    return deleteDoc(employeeRef);
  }
}
