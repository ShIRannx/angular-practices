import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-list',
  template: `
    <ul>
      <li><a routerLink="time">Time</a></li>
      <li><a routerLink="background">Background</a></li>
    </ul>
  `,
  styles: [],
})
export class DirectiveListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
