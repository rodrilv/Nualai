import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public dataConvert = {
    sistolica: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.presion_arterial?.sistolica
    ),
    distolica: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.presion_arterial?.distolica
    ),
    glucosa: parseInt(this.consultasService.consultaMember?.valoracion_medica?.glucosa),
    insulina: parseInt(this.consultasService.consultaMember?.valoracion_medica?.insulina),
    trigliceridos: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.trigliceridos
    ),
    colesterol_total: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.colesterol.total
    ),
    hdl: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.colesterol.hdl
    ),
    ldl: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.colesterol.ldl
    ),
    no_hdl: parseInt(
      this.consultasService.consultaMember?.valoracion_medica?.colesterol.no_hdl
    ),
  };
  constructor( public consultasService: ConsultasService, public seguimientoService: SeguimientoService) { }

  ngOnInit() {
  }

}
