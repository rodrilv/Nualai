import { Component } from '@angular/core';
import { DatosNutriologo } from '../models/datos-nutri';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SeguimientoService } from '../services/seguimiento.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public datosNutriologo: DatosNutriologo;
  public Editor = ClassicEditor;

  constructor(public seguimientoService: SeguimientoService) {
    this.datosNutriologo = new DatosNutriologo();
  }

  saveData() {
    console.log(this.datosNutriologo);
  }
  calcularImc() {
    let estatura = parseInt(this.datosNutriologo.datosNutricionales.estatura);
    let peso = parseInt(this.datosNutriologo.datosNutricionales.peso);
    estatura = (estatura * 0.01);//We are converting cm to m

    let imc = (peso / (Math.pow(estatura, 2)));
    this.datosNutriologo.datosNutricionales.IMC = imc.toString();
  }
  deleteText(){
    this.datosNutriologo.datosNutricionales.prefiere_no_consumir = "";
  }
}
