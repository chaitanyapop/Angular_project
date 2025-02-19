import { Injectable, OnInit } from '@angular/core';
import { employeeData } from '../../../app/model/employee_data.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListService implements OnInit{

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
      
  }

  deleteEmployee()
  {

  }
}
