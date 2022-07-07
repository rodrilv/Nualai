import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescriptionsViewPage } from './prescriptions-view.page';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionsViewPageRoutingModule {}
