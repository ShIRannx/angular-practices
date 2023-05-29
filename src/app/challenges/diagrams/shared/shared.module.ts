import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerComponent } from './components/divider/divider.component';
import { TimeDirective } from './directives/time.directive';
import { SegmentComponent } from './components/segment/segment.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    DividerComponent,
    TimeDirective,
    SegmentComponent,
    PlaceholderComponent,
    TableComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TimeDirective,
    DividerComponent,
    PlaceholderComponent,
    SegmentComponent,
    TableComponent,
    TabsComponent
  ]
})
export class SharedModule { }
