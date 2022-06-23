import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMemberPrescriptionPageRoutingModule } from './view-member-prescription-routing.module';

import { ViewMemberPrescriptionPage } from './view-member-prescription.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMemberPrescriptionPageRoutingModule,
    PipesModule
  ],
  declarations: [ViewMemberPrescriptionPage]
})
export class ViewMemberPrescriptionPageModule {}
