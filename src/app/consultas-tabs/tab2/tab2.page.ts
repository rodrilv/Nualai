import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ConsultaNutricion } from 'src/app/models/consultas/consulta-nutricion';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  Editor = ClassicEditor;
  public consultaNutricion: ConsultaNutricion;
  constructor(public consultasService: ConsultasService, public seguimientoService: SeguimientoService) {
    this.consultaNutricion = new ConsultaNutricion();
    this.consultaNutricion.valoracion_nutricional.plan_alimentacion =
      '<p>&nbsp;</p><figure class="table"><table><tbody><tr><td rowspan="3">Desayuno</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Comida</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Cena</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p>&nbsp;</p>';
  }

  ngOnInit() {}
  async saveConsultaNutricional() {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    this.consultaNutricion.valoracion_nutricional.status = 'Completada';
    let obj: any = await this.consultasService.updateConsultaNutricional(this.consultasService.cid, this.consultaNutricion);
    if(obj.ok === true){
      Swal.fire({toast: true, title: 'Consulta Médica Guardada', icon: 'success',})
    }else{
      Swal.fire({toast: true, title: 'Hubo un error al guardar la consulta', icon: 'warning', text: 'Intenta nuevamente'});
    }
    console.log(this.consultaNutricion);
  }
  calcularImc() {
    let estatura = parseInt(this.consultaNutricion.valoracion_nutricional.estatura);
    let peso = parseInt(this.consultaNutricion.valoracion_nutricional.peso);
    estatura = estatura * 0.01; //We are converting cm to m

    let imc = peso / Math.pow(estatura, 2);
    this.consultaNutricion.valoracion_nutricional.IMC = imc.toFixed(2);
    this.calcularACT();
  }
  calcularACT(){
    let peso = parseInt(this.consultaNutricion.valoracion_nutricional.peso);
    if(this.seguimientoService.miembro.datosGenerales.genero == 'M'){
      this.consultaNutricion.valoracion_nutricional.nivel_agua_corporal = (peso * 0.6).toFixed(2);
    }else if(this.seguimientoService.miembro.datosGenerales.genero == 'F'){
      this.consultaNutricion.valoracion_nutricional.nivel_agua_corporal = (peso * 0.5).toFixed(2);
    }
  }
  calcularRango(){
    let imc = parseFloat(this.consultaNutricion.valoracion_nutricional.IMC)
    if( imc < 18.5){
      this.consultaNutricion.valoracion_nutricional.rango = 'Peso Inferior';
    }else if(imc > 18.5 && imc < 24.9){
      this.consultaNutricion.valoracion_nutricional.rango = 'Peso Normal';
    }else if(imc > 24.9 && imc < 29.9){
      this.consultaNutricion.valoracion_nutricional.rango = 'Sobrepeso';
    }
    else if(imc > 29.9 && imc < 34.9){
      this.consultaNutricion.valoracion_nutricional.rango = 'Obesidad Clase 1';
    }
    else if(imc > 34.9 && imc < 39.9){
      this.consultaNutricion.valoracion_nutricional.rango = 'Obesidad Clase 2';
    }
    else if(imc > 40){
      this.consultaNutricion.valoracion_nutricional.rango = 'Obesidad Clase 3';
    }
  }
  calcularPesoIdeal(){
    let imc = parseFloat(this.consultaNutricion.valoracion_nutricional.IMC);
    let peso = parseFloat(this.consultaNutricion.valoracion_nutricional.peso);
    let peso_ideal = ( (peso * 24.9) / imc );
    this.consultaNutricion.valoracion_nutricional.peso_ideal = peso_ideal.toFixed(2);
  }
  calculos(){
    this.calcularImc();
    this.calcularACT();
    this.calcularRango();
    this.calcularPesoIdeal();
  }
}
