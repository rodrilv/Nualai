import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaMedicaResultsModalPageRoutingModule } from './consulta-medica-results-modal-routing.module';

import { ConsultaMedicaResultsModalPage } from './consulta-medica-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaMedicaResultsModalPageRoutingModule
  ],
  declarations: [ConsultaMedicaResultsModalPage]
})
export class ConsultaMedicaResultsModalPageModule {}
