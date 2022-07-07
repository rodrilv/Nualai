import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrescriptionsViewPageRoutingModule } from './prescriptions-view-routing.module';

import { PrescriptionsViewPage } from './prescriptions-view.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrescriptionsViewPageRoutingModule,
    ComponentsModule,
    CKEditorModule
  ],
  declarations: [PrescriptionsViewPage]
})
export class PrescriptionsViewPageModule {}
