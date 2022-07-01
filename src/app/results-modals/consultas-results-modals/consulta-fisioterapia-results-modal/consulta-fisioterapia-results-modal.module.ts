import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaFisioterapiaResultsModalPageRoutingModule } from './consulta-fisioterapia-results-modal-routing.module';

import { ConsultaFisioterapiaResultsModalPage } from './consulta-fisioterapia-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaFisioterapiaResultsModalPageRoutingModule
  ],
  declarations: [ConsultaFisioterapiaResultsModalPage]
})
export class ConsultaFisioterapiaResultsModalPageModule {}
