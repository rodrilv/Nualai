import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Miembro } from 'src/app/models/miembro';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.page.html',
  styleUrls: ['./register-member.page.scss'],
})
export class RegisterMemberPage implements OnInit {
  member_id: any;
  constructor(
    private modal: ModalController,
    public miembro: Miembro,
    public datosGeneralesService: DatosGeneralesService,
    public seguimientoService: SeguimientoService,
    private router: Router
  ) {
    this.miembro = new Miembro();
  }

  ngOnInit() {}

  async register() {
    Swal.fire({
      title: 'Registrando miembro...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    try {
      let obj: any = await this.datosGeneralesService.registerMember(
        this.miembro
      );
      if (obj.ok == true) {
        this.member_id = obj.memDB._id;
        let subj: any = await this.seguimientoService.getMemberFollowing(
          this.member_id
        );
        if (subj.ok == true) {
          this.seguimientoService.miembro = {};
          this.seguimientoService._id = subj?.member._id;
          this.seguimientoService.miembro = subj?.member;
        }
      }
      this.closeSwal(true);
      this.closeModal();
      Swal.fire({
        toast: true,
        title: 'Miembro Registrado',
        text: `Su ID: ${this.member_id}. \n Recuerda crear la primera consulta (Entrevistas) `,
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: 'Crear consulta',
        confirmButtonColor: 'green',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['following'], { replaceUrl: true });
          this.closeSwal(true);
        }
      });
    } catch (e) {
      console.error(e);
      
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Aviso',
        text: 'Hubo un error al completar la operación!',
      });
    }
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
  genderToUpperCase() {
    this.miembro.miembro.datosGenerales.genero =
      this.miembro.miembro.datosGenerales.genero.substring(0, 1).toUpperCase();
  }
}
