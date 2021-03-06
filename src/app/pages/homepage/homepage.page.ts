import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterMemberPage } from '../register-member/register-member.page';
import { ViewMembersPage } from '../view-members/view-members.page';
import { DebtsPage } from '../debts/debts.page';
import { PersonalPage } from '../personal/personal.page';
import { ViewMemberFollowingsPage } from '../view-member-followings/view-member-followings.page';
import { ViewMemberPrescriptionPage } from '../view-member-prescription/view-member-prescription.page';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public router: Router, private modal: ModalController) { }

  ngOnInit() {
  }
  openSomething(){
    
  }

  async openViewMembers(){
    const modal = await this.modal.create({
      component: ViewMembersPage
    });
    return await modal.present();
  }
  async openViewFollowing(){
    const modal = await this.modal.create({
      component: ViewMemberFollowingsPage
    })
    return await modal.present();
  }
  async openRegisterMember(){
    const modal = await this.modal.create({
      component: RegisterMemberPage
    });
    return await modal.present();
  }
  async openDebts(){
    const modal = await this.modal.create({
      component: DebtsPage
    });
    return await modal.present();
  }
  async openPersonal(){
    const modal = await this.modal.create({
      component: PersonalPage
    })
    return await modal.present();
  }
  async openViewPrescription(){
    const modal = await this.modal.create({
      component: ViewMemberPrescriptionPage
    });
    return await modal.present();
  }

}
