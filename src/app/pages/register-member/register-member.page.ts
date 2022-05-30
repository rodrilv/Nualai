import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Miembro } from 'src/app/models/miembro';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.page.html',
  styleUrls: ['./register-member.page.scss'],
})
export class RegisterMemberPage implements OnInit {
  constructor(
    private modal: ModalController,
    private platform: Platform,
    public miembro: Miembro,
    public datosGeneralesService: DatosGeneralesService
  ) {
    this.miembro = new Miembro();
  }

  ngOnInit() {}

  async register() {
    await this.datosGeneralesService.registerMember(this.miembro);
    console.log(this.miembro.miembro);
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
  genderToUpperCase(){
    this.miembro.miembro.datosGenerales.genero = this.miembro.miembro.datosGenerales.genero.substring(0,1).toUpperCase();
  }
}
