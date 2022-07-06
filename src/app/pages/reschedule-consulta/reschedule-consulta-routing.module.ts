import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescheduleConsultaPage } from './reschedule-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: RescheduleConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescheduleConsultaPageRoutingModule {}
