import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `
    <input type="text" #enteredtime [value]="time" (input)="inputing()" />
    <div *appTime="time; let i = index">
      <span>directive-time works! {{ i + 1 }} time</span>
    </div>
  `,
  styles: [],
})
export class TimeComponent implements OnInit {
  time = 5;
  @ViewChild('enteredtime') enteredtime!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  inputing() {
    this.time = this.enteredtime.nativeElement.value;
  }

}
