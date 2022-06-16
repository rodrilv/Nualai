import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../services/seguimiento.service';
import { PersonalService } from '../services/personal.service';
import { DatosFisioterapia } from '../models/datos-fisio';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  editorText: any = "";
  public personal: any;
  public Editor = ClassicEditor;
  public datosFisioterapia: DatosFisioterapia;
  constructor(public seguimientoService: SeguimientoService, public personalService: PersonalService) {this.datosFisioterapia = new DatosFisioterapia()}

  saveData(id: any) { console.log(this.editorText) }
  ngOnInit(): void {
    this.getPersonal();
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
    this.personal = await this.personalService.getPersonalByRole('Fisioterapeuta');
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
