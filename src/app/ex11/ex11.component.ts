import {Component, inject, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {AsyncPipe, NgForOf} from "@angular/common";
import {EmployeeService} from "../EmployeeService";
import {Observable, retry} from "rxjs";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {OrdenarService} from "../ordenar.service";

//type emplKey = keyof Employee;

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ex11.component.html',
  styleUrl: './ex11.component.css'

})

export class Ex11Component {

  applyForm : FormGroup;
  constructor(private employeeService: EmployeeService) {
    this.applyForm = new FormGroup({
      name: new FormControl( '', [Validators.required]),
      position: new FormControl( '', [Validators.required, Validators.minLength(1)]),
      salary: new FormControl('', [Validators.required, Validators.minLength(1)]),
      yearsWorking: new FormControl( '', [Validators.required, Validators.minLength(1)])
    });
  }
  submitApplication() {
    if (this.applyForm.valid) {
      this.employeeService.addEmployee(this.applyForm.value);
      this.applyForm.reset()
    }

  }
}
