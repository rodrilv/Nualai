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
  public datosNutri: DatosNutriologo;

  constructor(public seguimientoService: SeguimientoService, public personalService: PersonalService) {
    this.datosNutriologo = new DatosNutriologo();
  }
  async ngOnInit(){
    await this.getPersonal();
  }

  saveData() {
    console.log(this.datosNutriologo);
  }
  calcularImc() {
    let estatura = parseInt(this.datosNutriologo.datosNutricionales.estatura);
    let peso = parseInt(this.datosNutriologo.datosNutricionales.peso);
    estatura = (estatura * 0.01);//We are converting cm to m

    let imc = (peso / (Math.pow(estatura, 2)));
    this.datosNutriologo.datosNutricionales.IMC = imc.toFixed(2);
  }
  deleteText(){
    this.datosNutriologo.datosNutricionales.prefiere_no_consumir = "";
  }
  async getPersonal(){
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false
    });
    this.personal = await this.personalService.getPersonalByRole("Nutriologo");
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
