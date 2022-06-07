import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMemberFollowingsPage } from './view-member-followings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMemberFollowingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMemberFollowingsPageRoutingModule {}
