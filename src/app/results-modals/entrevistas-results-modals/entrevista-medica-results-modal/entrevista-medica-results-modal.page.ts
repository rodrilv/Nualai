import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-entrevista-medica-results-modal',
  templateUrl: './entrevista-medica-results-modal.page.html',
  styleUrls: ['./entrevista-medica-results-modal.page.scss'],
})
export class EntrevistaMedicaResultsModalPage implements OnInit {
  public Editor = ClassicEditor;
  public dataConvert = {
    sistolica: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.presion_arterial?.sistolica
    ),
    distolica: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.presion_arterial?.distolica
    ),
    glucosa: parseInt(this.seguimientoService.miembro?.datosMedicos?.glucosa),
    insulina: parseInt(this.seguimientoService.miembro?.datosMedicos?.insulina),
    trigliceridos: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.trigliceridos
    ),
    colesterol_total: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.colesterol.total
    ),
    hdl: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.colesterol.hdl
    ),
    ldl: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.colesterol.ldl
    ),
    no_hdl: parseInt(
      this.seguimientoService.miembro?.datosMedicos?.colesterol.no_hdl
    ),
  };
  constructor(
    public seguimientoService: SeguimientoService,
    private modal: ModalController
  ) {}

  ngOnInit() {
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
}
