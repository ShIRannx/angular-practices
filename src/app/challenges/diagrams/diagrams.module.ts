import { NgModule } from '@angular/core'

import { SharedModule } from './shared/shared.module'
import { DiagramsComponent } from './diagrams.component'
import { ElementsComponent } from './elements/elements.component'
import { DiagramsRoutingModule } from './diagrams-routing.module'
import { NotFoundComponent } from './not-found/not-found.component'
import { CollectionsComponent } from './collections/collections.component';
import { BiographyComponent } from './collections/biography/biography.component';
import { CompaniesComponent } from './collections/companies/companies.component';
import { PartnersComponent } from './collections/partners/partners.component'

@NgModule({
  declarations: [
    DiagramsComponent,
    ElementsComponent,
    CollectionsComponent,
    NotFoundComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
  ],
  imports: [SharedModule, DiagramsRoutingModule],
})
export class DiagramsModule { }
