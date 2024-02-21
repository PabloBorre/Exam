import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {AsyncPipe, NgForOf} from "@angular/common";
import {EmployeeService} from "../EmployeeService";
import {Observable, retry} from "rxjs";
import {FormsModule} from "@angular/forms";
import {OrdenarService} from "../ordenar.service";

//type emplKey = keyof Employee;

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './ex09.component.html'
})

export class Ex09Component implements OnInit{

  selectedOption: string | undefined;
  employee: Employee[] = [];
  //sortingCriteria: emplKey = "name";
  constructor(private employeeService: EmployeeService, private ordenarService: OrdenarService) { }


 ordenar(){
    if (this.selectedOption !== undefined){

     /* let key: emplKey = this.sortingCriteria;

      this.employee.sort((a: Employee, b: Employee) => a[key] > b[key] ? 1 : -1)*/

       this.ordenarService.ordenarDatos(this.employee, this.selectedOption).subscribe(
        e => this.employee = e
      );
    }
  }
  ngOnInit(): void {
    this.employeeService.getListEmployee().subscribe(emp => {
      this.employee = emp
    })
  }

}
