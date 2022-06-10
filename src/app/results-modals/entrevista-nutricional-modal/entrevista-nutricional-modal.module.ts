import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrevistaNutricionalModalPageRoutingModule } from './entrevista-nutricional-modal-routing.module';

import { EntrevistaNutricionalModalPage } from './entrevista-nutricional-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrevistaNutricionalModalPageRoutingModule,
    ComponentsModule,
    CKEditorModule
  ],
  declarations: [EntrevistaNutricionalModalPage]
})
export class EntrevistaNutricionalModalPageModule {}
