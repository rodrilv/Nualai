import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtsPageRoutingModule } from './debts-routing.module';

import { DebtsPage } from './debts.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtsPageRoutingModule,
    PipesModule
  ],
  declarations: [DebtsPage]
})
export class DebtsPageModule {}
