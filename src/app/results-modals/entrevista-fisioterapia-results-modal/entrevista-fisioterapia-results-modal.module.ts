import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaFisioterapiaResultsModalPageRoutingModule } from './entrevista-fisioterapia-results-modal-routing.module';

import { EntrevistaFisioterapiaResultsModalPage } from './entrevista-fisioterapia-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaFisioterapiaResultsModalPageRoutingModule
  ],
  declarations: [EntrevistaFisioterapiaResultsModalPage]
})
export class EntrevistaFisioterapiaResultsModalPageModule {}
