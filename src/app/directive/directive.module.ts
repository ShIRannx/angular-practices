import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveComponent } from './directive.component';
import { TimeComponent } from './time/directive-time.component';
import { DirectiveSharedModule } from './directive-shared.module';
import { DirectiveListComponent } from './directive-list.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { BackgroundColorComponent } from './background-color/background-color.component';

@NgModule({
  declarations: [
    TimeComponent,
    DirectiveComponent,
    DirectiveListComponent,
    BackgroundColorComponent,
  ],
  imports: [CommonModule, DirectiveSharedModule, DirectiveRoutingModule],
})
export class DirectiveModule {}
