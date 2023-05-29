import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background-color',
  template: `
    <input
      type="text"
      #enteredColor
      (input)="inputing()"
      [value]="color"
      placeholder="Enter repeat time here"
    />
    <div [appBackgroundColor]="color">
      <h2>background-color works!</h2>
    </div>
  `,
  styles: [],
})
export class BackgroundColorComponent implements OnInit {
  color: string = 'green';
  @ViewChild('enteredColor') enteredColor!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  inputing() {
    this.color = this.enteredColor.nativeElement.value;
  }
}
