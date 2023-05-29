import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundColorComponent } from './background-color/background-color.component';

import { DirectiveListComponent } from './directive-list.component';
import { DirectiveComponent } from './directive.component';
import { TimeComponent } from './time/directive-time.component';

const routes: Routes = [
  {
    path: '',
    component: DirectiveComponent,
    children: [
      { path: '', component: DirectiveListComponent },
      {
        path: 'time',
        component: TimeComponent,
      },
      { path: 'background', component: BackgroundColorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveRoutingModule {}
