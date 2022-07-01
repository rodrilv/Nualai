import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaNutricionResultsModalPageRoutingModule } from './consulta-nutricion-results-modal-routing.module';

import { ConsultaNutricionResultsModalPage } from './consulta-nutricion-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaNutricionResultsModalPageRoutingModule
  ],
  declarations: [ConsultaNutricionResultsModalPage]
})
export class ConsultaNutricionResultsModalPageModule {}
