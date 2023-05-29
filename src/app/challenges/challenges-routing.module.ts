import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengesComponent } from './challenges.component';
import { TypingComponent } from './typing/typing.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChallengesComponent,
    children: [
      { path: '', component: ChallengesListComponent },
      {
        path: 'typing',
        component: TypingComponent,
      },
      {
        path: 'diagrams',
        loadChildren: () =>
          import('./diagrams/diagrams.module').then(m => m.DiagramsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
