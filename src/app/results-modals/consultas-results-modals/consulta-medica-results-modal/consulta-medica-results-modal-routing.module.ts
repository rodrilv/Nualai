import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaMedicaResultsModalPage } from './consulta-medica-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMedicaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaMedicaResultsModalPageRoutingModule {}
