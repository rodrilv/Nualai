import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../services/seguimiento.service';
import { PersonalService } from '../services/personal.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatosPsicologicos } from '../models/entrevistas/datos-psicologicos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public personal: any;
  public Editor = ClassicEditor;
  public datosPsicologicos: DatosPsicologicos = new DatosPsicologicos();

  constructor(public seguimientoService: SeguimientoService,
    public personalService: PersonalService) { }

  async ngOnInit() {
    await this.getPersonal();
  }

  saveData(id: any){
    console.log(this.datosPsicologicos);
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
        let obj: any = await this.seguimientoService.saveDatosPsicologicosInterview(
          id,
          this.datosPsicologicos
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
    this.personal = await this.personalService.getPersonalByRole('Psicologo');
    this.closeSwal(true);
  }

  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }

}
