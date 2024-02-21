import { Injectable } from '@angular/core';
import {map, Observable, of, Subject} from "rxjs";
import {Employee} from "./model/employee";

type emplKey = keyof Employee;

@Injectable({
  providedIn: 'root'
})
export class OrdenarService {

  constructor() { }
  ordenarDatos(datos: Employee[], campo: string): Observable<Employee[]> {
    let key: emplKey = <"name" | "salary" | "position" >campo;

    return of(datos.sort((a: Employee, b: Employee) => a[key] > b[key] ? 1 : -1))
    /*if (campo === "name"){
      datos.sort((a, b) => a.name.localeCompare(b.name))

    } else if (campo === "salary"){
      datos.sort((a, b) => a.salary - b.salary)

    } else{
      datos.sort((a,b) => a.position - b.position)

    }
    return of(datos);*/
  }

}
