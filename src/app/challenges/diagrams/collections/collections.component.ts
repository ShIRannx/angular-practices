import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]
  data = [
    {
      name: 'James McJoe',
      age: 30,
      job: 'Designer',
    },
    {
      name: 'Jill Jilly',
      age: 24,
      job: 'Engineer',
    },
    {
      name: 'Elyse',
      age: 32,
      job: 'Engineer',
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}
