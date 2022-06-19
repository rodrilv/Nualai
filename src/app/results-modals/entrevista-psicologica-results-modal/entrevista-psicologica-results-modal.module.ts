import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaPsicologicaResultsModalPageRoutingModule } from './entrevista-psicologica-results-modal-routing.module';

import { EntrevistaPsicologicaResultsModalPage } from './entrevista-psicologica-results-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaPsicologicaResultsModalPageRoutingModule,
    ComponentsModule,
    CKEditorModule
  ],
  declarations: [EntrevistaPsicologicaResultsModalPage]
})
export class EntrevistaPsicologicaResultsModalPageModule {}
