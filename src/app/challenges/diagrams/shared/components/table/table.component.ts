import { Component, Input, OnInit } from '@angular/core';

interface TableHeader {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() styles = '';

  @Input() headers: TableHeader[]  = [];
  @Input() data: { [key: string]: string | number }[] = [];

  constructor() { }

  ngOnInit(): void { }
}
