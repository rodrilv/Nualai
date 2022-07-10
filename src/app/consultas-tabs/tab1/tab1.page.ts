import { Component, OnInit } from '@angular/core';
import { ConsultaMedica } from 'src/app/models/consultas/consulta-medica';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public consultaMedica: ConsultaMedica;
  constructor(public consultasService: ConsultasService) {
    this.consultaMedica = new ConsultaMedica();
  }
  ngOnInit() {}
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }

  async saveConsultaMedica() {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    this.consultaMedica.valoracion_medica.status = 'Completada';
    let obj: any = await this.consultasService.updateConsultaMedica(this.consultasService.cid, this.consultaMedica);
    if(obj.ok === true){
      Swal.fire({toast: true, title: 'Consulta Médica Guardada', icon: 'success',})
    }else{
      Swal.fire({toast: true, title: 'Hubo un error al guardar la consulta', icon: 'success', text: 'Intenta nuevamente'});
    }
  }
}
