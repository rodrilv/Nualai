import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { SeguimientoService } from '../../services/seguimiento.service';
import { FollowingPage } from '../following/following.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-member-followings',
  templateUrl: './view-member-followings.page.html',
  styleUrls: ['./view-member-followings.page.scss'],
})
export class ViewMemberFollowingsPage implements OnInit {
  public text: any;
  public members: any;

  constructor(
    private modal: ModalController,
    public miembroService: MiembrosService,
    public seguimientoService: SeguimientoService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.miembroService.getMiembros();
    this.members = this.miembroService.miembros[0].members;
  }
  seguimiento(id: any) {
    this.seguimientoService._id = id;
    this.router.navigate(['following']);
    this.closeModal();
  }

  buscarMiembro(event: any) {
    console.log(event.detail.value);
    this.text = event.detail.value;
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
}
