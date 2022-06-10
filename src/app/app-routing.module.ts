import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results-tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepagePageModule)
  },
  {
    path: 'register-member',
    loadChildren: () => import('./pages/register-member/register-member.module').then( m => m.RegisterMemberPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'view-members',
    loadChildren: () => import('./pages/view-members/view-members.module').then( m => m.ViewMembersPageModule)
  },
  {
    path: 'debts',
    loadChildren: () => import('./pages/debts/debts.module').then( m => m.DebtsPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./results-tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./results-tabs/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'view-member-followings',
    loadChildren: () => import('./pages/view-member-followings/view-member-followings.module').then( m => m.ViewMemberFollowingsPageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./pages/following/following.module').then( m => m.FollowingPageModule)
  },  {
    path: 'entrevista-medica-results-modal',
    loadChildren: () => import('./results-modals/entrevista-medica-results-modal/entrevista-medica-results-modal.module').then( m => m.EntrevistaMedicaResultsModalPageModule)
  },
  {
    path: 'entrevista-nutricional-modal',
    loadChildren: () => import('./results-modals/entrevista-nutricional-modal/entrevista-nutricional-modal.module').then( m => m.EntrevistaNutricionalModalPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./results-tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'view-member-prescription',
    loadChildren: () => import('./pages/view-member-prescription/view-member-prescription.module').then( m => m.ViewMemberPrescriptionPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
