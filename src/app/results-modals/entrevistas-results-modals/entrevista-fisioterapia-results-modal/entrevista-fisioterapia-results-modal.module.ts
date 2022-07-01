import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaFisioterapiaResultsModalPageRoutingModule } from './entrevista-fisioterapia-results-modal-routing.module';

import { EntrevistaFisioterapiaResultsModalPage } from './entrevista-fisioterapia-results-modal.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaFisioterapiaResultsModalPageRoutingModule,
    CKEditorModule,
    ComponentsModule

  ],
  declarations: [EntrevistaFisioterapiaResultsModalPage]
})
export class EntrevistaFisioterapiaResultsModalPageModule {}
