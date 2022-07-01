import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPsicologicaResultsModalPage } from './consulta-psicologica-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPsicologicaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPsicologicaResultsModalPageRoutingModule {}
