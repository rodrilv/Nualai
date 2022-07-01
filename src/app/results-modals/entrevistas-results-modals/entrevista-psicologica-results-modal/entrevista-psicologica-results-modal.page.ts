import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-entrevista-psicologica-results-modal',
  templateUrl: './entrevista-psicologica-results-modal.page.html',
  styleUrls: ['./entrevista-psicologica-results-modal.page.scss'],
})
export class EntrevistaPsicologicaResultsModalPage implements OnInit {
  public Editor = ClassicEditor;
  constructor(public modal: ModalController, public seguimientoService: SeguimientoService) { }

  ngOnInit() {
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}
