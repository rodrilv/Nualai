import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrevistaPsicologicaResultsModalPage } from './entrevista-psicologica-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntrevistaPsicologicaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrevistaPsicologicaResultsModalPageRoutingModule {}
