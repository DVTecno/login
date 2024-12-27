import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {
  users = signal<any[]>([{id: 1, name: 'Diego', email: "diego@gmail.com"}, {id: 2, name: 'Cristian', email: "cristian@gmail.com"}, {id: 3, name: 'Juan', email: "juan@gmail.com"}]);
}
