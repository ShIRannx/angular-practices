import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDirective } from './utils/time.directive';
import { BackgroundColorDirective } from './utils/background-color.directive';

@NgModule({
  declarations: [TimeDirective, BackgroundColorDirective],
  imports: [CommonModule],
  exports: [TimeDirective, BackgroundColorDirective],
})
export class DirectiveSharedModule {}
