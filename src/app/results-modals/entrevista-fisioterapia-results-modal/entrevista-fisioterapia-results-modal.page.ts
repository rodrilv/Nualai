import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-entrevista-fisioterapia-results-modal',
  templateUrl: './entrevista-fisioterapia-results-modal.page.html',
  styleUrls: ['./entrevista-fisioterapia-results-modal.page.scss'],
})
export class EntrevistaFisioterapiaResultsModalPage implements OnInit {
  public Editor = ClassicEditor;
  constructor(public seguimientoService: SeguimientoService, private modal: ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}
