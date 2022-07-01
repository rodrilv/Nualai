import { Component } from '@angular/core';
import { DatosMedicos } from '../models/entrevistas/datos-medicos';
import { SeguimientoService } from '../services/seguimiento.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PersonalService } from '../services/personal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public datosMedicos: DatosMedicos;
  public Editor = ClassicEditor;
  public personal: any;

  constructor(
    public seguimientoService: SeguimientoService,
    public personalService: PersonalService
  ) {
    this.datosMedicos = new DatosMedicos();
  }

  async ngOnInit() {
    await this.getPersonal();
    console.log(this.personal.personal);
  }
  async getPersonal() {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    this.personal = await this.personalService.getPersonalByRole('Medico');
    this.closeSwal(true);
  }
  async saveData(id: any) {
    console.log(this.datosMedicos);
    Swal.fire({
      toast: true,
      icon: 'info',
      title:
        'Procure revisar que los datos estén totalmente correctos antes de proceder...',
      text: '¿Desea continuar y guardar la entrevista?',
      showConfirmButton: true,
      showDenyButton: true,
      denyButtonText: 'Volver a revisar',
      confirmButtonText: 'Guardar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Guardando...',
          toast: true,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          showConfirmButton: false,
        });
        let obj: any = await this.seguimientoService.saveDatosMedicosInterview(
          id,
          this.datosMedicos
        );
        if (obj.ok === true) {
          this.closeSwal(true);
          Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Entrevista Guardada',
          });
        } else {
          this.closeSwal(true);
          Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Hubo un error al guardar la entrevista',
          });
        }
      } else {
        this.closeSwal(true);
      }
    });
  }

  deleteText() {}
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
