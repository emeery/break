import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
// import { count } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todos: string[] = [
    'bun venit', 'bienvenue', '歡迎', 'welcome', 'welkom', 'benvenuto', 'fáilte', 'bienvenido', 'a', 'mi', 'portafalio', ':)'];
  saludo = '';
  constructor() { }
  ngOnInit() {
    this.setWelcome();
  }
  setWelcome() {
    const source = interval(500);
    const subscribe = source.subscribe(i => {
      this.saludo = this.todos[i];
    });
    setTimeout(() => subscribe.unsubscribe(), 6500);
  }

}
