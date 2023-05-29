import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list.component';

const routes: Routes = [{ path: '', component: AppListComponent },
  {
    path: 'directive',
    loadChildren: () =>
      import('./directive/directive.module').then((c) => c.DirectiveModule),
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./challenges/challenges.module').then((m) => m.ChallengesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
