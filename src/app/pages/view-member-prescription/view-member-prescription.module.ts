import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMemberPrescriptionPageRoutingModule } from './view-member-prescription-routing.module';

import { ViewMemberPrescriptionPage } from './view-member-prescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMemberPrescriptionPageRoutingModule
  ],
  declarations: [ViewMemberPrescriptionPage]
})
export class ViewMemberPrescriptionPageModule {}
