import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Personal } from 'src/app/models/personal';
import { PersonalService } from 'src/app/services/personal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit, AfterViewInit {
  public formFlag: number;
  public newPersonal: Personal;

  constructor(
    private modal: ModalController,
    private cd: ChangeDetectorRef,
    public personalService: PersonalService
  ) {
    this.newPersonal = new Personal();
  }

  async ngOnInit() {
    await this.getPersonal();
  }
  async getPersonal() {
    Swal.fire({
      title: 'Cargado... Sé paciente!',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    try {
      await this.personalService.getPersonal();
    } catch (err) {
      this.closeSwal(true);
      Swal.fire({
        title: 'Hubo un error...',
        toast: true,
        showConfirmButton: false,
      });
    }
    this.closeSwal(true);
  }

  async registrarPersonal() {
    Swal.fire({
      title: 'Registrando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    try {
      let subject: any = await this.personalService.registerPersonal(
        this.newPersonal
      );
      if (subject.ok == true) {
        this.closeSwal(subject.ok);
        Swal.fire({
          title: 'Registrado Exitosamente!',
          icon: 'success',
          confirmButtonColor: 'green',
          toast: true,
        });
      } else {
        Swal.fire({
          title: 'Hubo un error durante la operación...',
          icon: 'warning',
          confirmButtonColor: 'green',
          toast: true,
        });
      }
    } catch (err) {
      this.closeSwal(true);
      Swal.fire({
        title: 'Hubo un error durante la operación...',
        icon: 'warning',
        confirmButtonColor: 'green',
        toast: true,
      });
    }
  }

  async deletePersonal(id: any) {
    Swal.fire({
      title: '¿Estás seguro de DAR DE BAJA al Personal?',
      text: 'Esta acción es irreversible',
      icon: 'error',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'No',
      denyButtonText: `Si`,
      toast: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Ufff!',
          text: 'El personal está a salvo...',
          icon: 'success',
          toast: true,
        });
      } else if (result.isDenied) {
        let del: any = await this.personalService.deletePersonal(id);
        if (del.ok) {
          Swal.fire({ title: 'Eliminado', icon: 'warning', toast: true })
          .then(async () => {
            await this.ngOnInit();
          })
        } else {
          Swal.fire({
            title: 'Hubo un error al eliminar el personal.',
            icon: 'error',
            toast: true,
          });
        }
      }
    });
  }
  ngAfterViewInit(): void {
    this.formFlag = 2;
    this.ngOnInit();
    this.cd.detectChanges();
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
  changeFlag(event: any) {
    console.log(event.detail.value);
    this.formFlag = event.detail.value;
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
  genderToUpperCase(){
    this.newPersonal.Personal.genero = this.newPersonal.Personal.genero.substring(0,1).toUpperCase();
  }
}
