import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-list',
  template: `
    <h1>List</h1>
    <hr />
    <ul>
      <li><a routerLink="directive">Directive</a></li>
      <li><a routerLink="challenges">Challenges</a></li>
    </ul>
  `,
  styles: [],
})
export class AppListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
