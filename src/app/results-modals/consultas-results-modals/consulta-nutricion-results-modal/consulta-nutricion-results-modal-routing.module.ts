import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaNutricionResultsModalPage } from './consulta-nutricion-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaNutricionResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaNutricionResultsModalPageRoutingModule {}
