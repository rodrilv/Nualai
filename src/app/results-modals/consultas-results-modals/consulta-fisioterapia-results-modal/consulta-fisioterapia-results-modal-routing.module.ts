import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaFisioterapiaResultsModalPage } from './consulta-fisioterapia-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaFisioterapiaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaFisioterapiaResultsModalPageRoutingModule {}
