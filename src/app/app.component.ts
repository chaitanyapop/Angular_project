import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeInfoComponent } from '../component/employee-info/employee-info.component';
import { EmployeeListComponent } from '../component/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeInfoComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Emp_database';
}
