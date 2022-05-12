import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.page.html',
  styleUrls: ['./register-member.page.scss'],
})
export class RegisterMemberPage implements OnInit {
  constructor(private modal: ModalController, private platform: Platform) {}

  ngOnInit() {}

  closeModal() {
      this.modal.dismiss().then(() => {
        this.modal = null;
      });
  }
}
