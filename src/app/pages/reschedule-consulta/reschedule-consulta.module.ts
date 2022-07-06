import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescheduleConsultaPageRoutingModule } from './reschedule-consulta-routing.module';

import { RescheduleConsultaPage } from './reschedule-consulta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescheduleConsultaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RescheduleConsultaPage]
})
export class RescheduleConsultaPageModule {}
