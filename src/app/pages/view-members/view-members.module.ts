import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMembersPageRoutingModule } from './view-members-routing.module';

import { ViewMembersPage } from './view-members.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMembersPageRoutingModule,
    PipesModule
  ],
  declarations: [ViewMembersPage]
})
export class ViewMembersPageModule {}
