import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaMedicaResultsModalPageRoutingModule } from './entrevista-medica-results-modal-routing.module';

import { EntrevistaMedicaResultsModalPage } from './entrevista-medica-results-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaMedicaResultsModalPageRoutingModule,
    ComponentsModule,
    CKEditorModule
  ],
  declarations: [EntrevistaMedicaResultsModalPage]
})
export class EntrevistaMedicaResultsModalPageModule {}
