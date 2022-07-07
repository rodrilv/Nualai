import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';
import { ModalController } from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-prescriptions-view',
  templateUrl: './prescriptions-view.page.html',
  styleUrls: ['./prescriptions-view.page.scss'],
})
export class PrescriptionsViewPage implements OnInit {
  Editor = ClassicEditor;
  constructor(public recetaService: RecetaService, private modal: ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}
