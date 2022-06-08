import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { SeguimientoService } from '../../services/seguimiento.service';
import { FollowingPage } from '../following/following.page';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  async seguimiento(id: any) {
      Swal.fire({
        title: 'Cargando...',
        toast: true,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false,
      });
      let obj: any = await this.seguimientoService.getMemberFollowing(id);
      if (obj.ok) {
        this.seguimientoService.miembro = {};
        this.seguimientoService._id = obj?.member._id;
        this.seguimientoService.miembro = obj?.member;
        this.router.navigate(['following'])
        console.log(this.seguimientoService.miembro);
        this.seguimientoService._id 

        this.closeSwal(true);
        this.closeModal();
      } else {
        this.closeSwal(true);
        Swal.fire({ toast: true, icon: 'error', title: 'Hubo un error!' });
      }
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
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
