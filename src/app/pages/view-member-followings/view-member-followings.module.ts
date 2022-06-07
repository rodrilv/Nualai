import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMemberFollowingsPageRoutingModule } from './view-member-followings-routing.module';

import { ViewMemberFollowingsPage } from './view-member-followings.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMemberFollowingsPageRoutingModule,
    PipesModule
  ],
  declarations: [ViewMemberFollowingsPage]
})
export class ViewMemberFollowingsPageModule {}
