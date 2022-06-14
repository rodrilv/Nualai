import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaPsicologicaResultsModalPageRoutingModule } from './entrevista-psicologica-results-modal-routing.module';

import { EntrevistaPsicologicaResultsModalPage } from './entrevista-psicologica-results-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaPsicologicaResultsModalPageRoutingModule
  ],
  declarations: [EntrevistaPsicologicaResultsModalPage]
})
export class EntrevistaPsicologicaResultsModalPageModule {}
