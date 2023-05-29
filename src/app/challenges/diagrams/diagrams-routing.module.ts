import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiagramsComponent } from './diagrams.component';
import { ElementsComponent } from './elements/elements.component';
import { CollectionsComponent } from './collections/collections.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BiographyComponent } from './collections/biography/biography.component';
import { CompaniesComponent } from './collections/companies/companies.component';
import { PartnersComponent } from './collections/partners/partners.component';

const routes: Routes = [
  {
    path: '',
    component: DiagramsComponent,
    children: [
      { path: 'elements', component: ElementsComponent },
      {
        path: 'collections',
        component: CollectionsComponent,
        children: [
          { path: '', component: BiographyComponent },
          { path: 'companies', component: CompaniesComponent },
          { path: 'partners', component: PartnersComponent },
        ],
      },
      { path: '', redirectTo: 'elements', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramsRoutingModule { }
