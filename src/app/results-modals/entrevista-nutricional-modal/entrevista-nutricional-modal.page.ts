import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-entrevista-nutricional-modal',
  templateUrl: './entrevista-nutricional-modal.page.html',
  styleUrls: ['./entrevista-nutricional-modal.page.scss'],
})
export class EntrevistaNutricionalModalPage implements OnInit {

  public Editor = ClassicEditor;
  constructor(public seguimientoService: SeguimientoService,  private modal: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}
