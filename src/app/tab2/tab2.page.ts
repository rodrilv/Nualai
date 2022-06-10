import { Component, OnInit } from '@angular/core';
import { DatosNutriologo } from '../models/datos-nutri';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SeguimientoService } from '../services/seguimiento.service';
import { PersonalService } from '../services/personal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public datosNutriologo: DatosNutriologo;
  public Editor = ClassicEditor;
  public personal: any;

  constructor(
    public seguimientoService: SeguimientoService,
    public personalService: PersonalService
  ) {
    this.datosNutriologo = new DatosNutriologo();
  }
  async ngOnInit() {
    await this.getPersonal();
  }

  async saveData(id: any) {
    console.log(this.datosNutriologo);
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
        let obj: any = await this.seguimientoService.saveDatosNutricionalesInterview(
          id,
          this.datosNutriologo
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
  calcularImc() {
    let estatura = parseInt(this.datosNutriologo.datosNutricionales.estatura);
    let peso = parseInt(this.datosNutriologo.datosNutricionales.peso);
    estatura = estatura * 0.01; //We are converting cm to m

    let imc = peso / Math.pow(estatura, 2);
    this.datosNutriologo.datosNutricionales.IMC = imc.toFixed(2);
    this.calcularACT();
  }
  calcularACT(){
    let peso = parseInt(this.datosNutriologo.datosNutricionales.peso);
    if(this.seguimientoService.miembro.datosGenerales.genero == 'M'){
      this.datosNutriologo.datosNutricionales.nivel_agua_corporal = (peso * 0.6).toFixed(2);
    }else if(this.seguimientoService.miembro.datosGenerales.genero == 'F'){
      this.datosNutriologo.datosNutricionales.nivel_agua_corporal = (peso * 0.5).toFixed(2);
    }
  }
  deleteText() {
    this.datosNutriologo.datosNutricionales.prefiere_no_consumir = '';
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
    this.personal = await this.personalService.getPersonalByRole('Nutriologo');
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
