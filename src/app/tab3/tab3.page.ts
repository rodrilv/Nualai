import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../services/seguimiento.service';
import { PersonalService } from '../services/personal.service';
import { DatosFisioterapia } from '../models/entrevistas/datos-fisio';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  editorText: any = '';
  public personal: any;
  public Editor = ClassicEditor;
  public datosFisioterapia: DatosFisioterapia;
  constructor(
    public seguimientoService: SeguimientoService,
    public personalService: PersonalService
  ) {
    this.datosFisioterapia = new DatosFisioterapia();
  }

  saveData(id: any){
    console.log(this.datosFisioterapia);
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
        let obj: any = await this.seguimientoService.saveDatosFisioterapiaInterview(
          id,
          this.datosFisioterapia
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

  ngOnInit(): void {
    this.getPersonal();
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
    this.personal = await this.personalService.getPersonalByRole(
      'Fisioterapeuta'
    );
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
