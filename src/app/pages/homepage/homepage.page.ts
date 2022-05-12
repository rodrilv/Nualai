import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterMemberPage } from '../register-member/register-member.page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public router: Router, private modal: ModalController) { }

  ngOnInit() {
  }

  navigateToDashboard(){
    this.router.navigate(['tabs']);
  }
  async openRegisterMember(){
    const modal = await this.modal.create({
      component: RegisterMemberPage
    });
    return await modal.present();
  }

}
