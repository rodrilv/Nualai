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
    path: 'view-member-followings',
    loadChildren: () => import('./pages/view-member-followings/view-member-followings.module').then( m => m.ViewMemberFollowingsPageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./pages/following/following.module').then( m => m.FollowingPageModule)
  },
  {
    path: 'entrevista-medica-results',
    loadChildren: () => import('./results-modals/entrevistas-results-modals/entrevista-medica-results-modal/entrevista-medica-results-modal.module').then( m => m.EntrevistaMedicaResultsModalPageModule)
  },
  {
    path: 'entrevista-nutricional-results',
    loadChildren: () => import('./results-modals/entrevistas-results-modals/entrevista-nutricional-modal/entrevista-nutricional-modal.module').then( m => m.EntrevistaNutricionalModalPageModule)
  },
  {
    path: 'view-member-prescription',
    loadChildren: () => import('./pages/view-member-prescription/view-member-prescription.module').then( m => m.ViewMemberPrescriptionPageModule)
  },
  {
    path: 'entrevista-psicologica-results',
    loadChildren: () => import('./results-modals/entrevistas-results-modals/entrevista-psicologica-results-modal/entrevista-psicologica-results-modal.module').then( m => m.EntrevistaPsicologicaResultsModalPageModule)
  },
  {
    path: 'entrevista-fisioterapia-results',
    loadChildren: () => import('./results-modals/entrevistas-results-modals/entrevista-fisioterapia-results-modal/entrevista-fisioterapia-results-modal.module').then( m => m.EntrevistaFisioterapiaResultsModalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-consulta',
    loadChildren: () => import('./pages/create-consulta/create-consulta.module').then( m => m.CreateConsultaPageModule)
  },
  {
    path: 'consultas-tabs',
    loadChildren: () => import('./consultas-tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'consulta-medica-results-modal',
    loadChildren: () => import('./results-modals/consultas-results-modals/consulta-medica-results-modal/consulta-medica-results-modal.module').then( m => m.ConsultaMedicaResultsModalPageModule)
  },
  {
    path: 'consulta-nutricion-results-modal',
    loadChildren: () => import('./results-modals/consultas-results-modals/consulta-nutricion-results-modal/consulta-nutricion-results-modal.module').then( m => m.ConsultaNutricionResultsModalPageModule)
  },
  {
    path: 'consulta-fisioterapia-results-modal',
    loadChildren: () => import('./results-modals/consultas-results-modals/consulta-fisioterapia-results-modal/consulta-fisioterapia-results-modal.module').then( m => m.ConsultaFisioterapiaResultsModalPageModule)
  },
  {
    path: 'consulta-psicologica-results-modal',
    loadChildren: () => import('./results-modals/consultas-results-modals/consulta-psicologica-results-modal/consulta-psicologica-results-modal.module').then( m => m.ConsultaPsicologicaResultsModalPageModule)
  },
  {
    path: 'reschedule-consulta',
    loadChildren: () => import('./pages/reschedule-consulta/reschedule-consulta.module').then( m => m.RescheduleConsultaPageModule)
  },
  {
    path: 'results-consultas-tabs',
    loadChildren: () => import('./results-consultas-tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
