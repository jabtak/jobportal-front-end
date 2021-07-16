import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DALBase } from 'src/app/shared/dalbase';
import { Employee,Alumni } from './signup.model';
@Injectable({
  providedIn: 'root'
})
export class AlumniService extends DALBase {


  constructor(http: HttpClient) { 
    super(http);

  }
  public postEmployee(emp: Employee){
    return this.ExecutePost('/employees',emp);
  }

  public postAlumni(alumni: Alumni){
    return this.ExecutePost('/signup',alumni);
  }

}

