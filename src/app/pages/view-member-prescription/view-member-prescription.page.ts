import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';
import { MiembrosService } from 'src/app/services/miembros.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-member-prescription',
  templateUrl: './view-member-prescription.page.html',
  styleUrls: ['./view-member-prescription.page.scss'],
})
export class ViewMemberPrescriptionPage implements OnInit {
  public text: string;
  constructor(
    public recetaService: RecetaService,
    public miembroService: MiembrosService,
    private modal: ModalController,
    private seguimientoService: SeguimientoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getMiembros();
  }
  async prescription(id: any) {
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
      this.router.navigate(['results/tab1'])
      console.log(this.seguimientoService.miembro);

      this.closeSwal(true);
      this.closeModal();
    } else {
      this.closeSwal(true);
      Swal.fire({ toast: true, icon: 'error', title: 'Hubo un error!' });
    }
}
  getMiembros(){
    this.miembroService.getMiembros();
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
  buscarMiembro(event: any) {
    console.log(event.detail.value);
    this.text = event.detail.value;
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
