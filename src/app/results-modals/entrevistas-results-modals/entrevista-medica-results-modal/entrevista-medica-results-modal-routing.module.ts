import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrevistaMedicaResultsModalPage } from './entrevista-medica-results-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntrevistaMedicaResultsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrevistaMedicaResultsModalPageRoutingModule {}
