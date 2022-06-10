import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMemberPrescriptionPage } from './view-member-prescription.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMemberPrescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMemberPrescriptionPageRoutingModule {}
