import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrevistaFisioterapiaResultsModalPage } from './entrevista-fisioterapia-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntrevistaFisioterapiaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrevistaFisioterapiaResultsModalPageRoutingModule {}
