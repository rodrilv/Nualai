import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateConsultaPageRoutingModule } from './create-consulta-routing.module';

import { CreateConsultaPage } from './create-consulta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateConsultaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateConsultaPage]
})
export class CreateConsultaPageModule {}
