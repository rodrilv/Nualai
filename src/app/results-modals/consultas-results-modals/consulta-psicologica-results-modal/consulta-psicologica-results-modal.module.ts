import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPsicologicaResultsModalPageRoutingModule } from './consulta-psicologica-results-modal-routing.module';

import { ConsultaPsicologicaResultsModalPage } from './consulta-psicologica-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPsicologicaResultsModalPageRoutingModule
  ],
  declarations: [ConsultaPsicologicaResultsModalPage]
})
export class ConsultaPsicologicaResultsModalPageModule {}
