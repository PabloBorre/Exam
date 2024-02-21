import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, of} from "rxjs";
import {Employee} from "./model/employee";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employee: Observable<Employee[]>

  constructor(
    private http: HttpClient
  ) {
    this.employee = this.http.get<Employee[]>(`assets/employee-list.json`);
  }

  getListEmployee(): Observable<Employee[]> {
    return this.employee;
  }

  addEmployee(employee: Employee) {

    return this.employee.subscribe(e =>{
          e.push(employee);
          this.employee = of(e)
        })

  }

}



