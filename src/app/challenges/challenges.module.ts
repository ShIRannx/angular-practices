import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { TypingComponent } from './typing/typing.component';
import { ChallengesComponent } from './challenges.component';

@NgModule({
  declarations: [ChallengesComponent, ChallengesListComponent, TypingComponent],
  imports: [CommonModule, FormsModule, ChallengesRoutingModule],
})
export class ChallengesModule {}
