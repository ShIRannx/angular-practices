import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})
export class TypingComponent {
  enteredText = '';
  title = 'typing-challenge';
  words = `Lorem ipsum dolor sit amet`;

  compare(originLetter: string, enteredLetter: string) {
    if (enteredLetter === undefined) return 'pending-letter';
    return originLetter === enteredLetter
      ? 'correct-letter'
      : 'incorrect-letter';
  }
}
