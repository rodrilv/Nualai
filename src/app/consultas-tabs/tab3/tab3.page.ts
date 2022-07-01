import { Component, OnInit } from '@angular/core';
import { ConsultaFisioterapia } from 'src/app/models/consultas/consulta-fisioterapia';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  Editor = ClassicEditor;
  public consultaFisioterapia: ConsultaFisioterapia;
  constructor(public consultasService: ConsultasService) { 
    this.consultaFisioterapia = new ConsultaFisioterapia();
    
   }

  ngOnInit() {
  }
  async saveConsultaFisioterapia(){
    this.consultaFisioterapia.valoracion_fisioterapia.status = 'Completada';
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.consultasService.updateConsultaFisioterapia(this.consultasService.cid, this.consultaFisioterapia);
    if(obj.ok === true){
      Swal.fire({toast: true, title: 'Consulta Médica Guardada', icon: 'success',})
    }else{
      Swal.fire({toast: true, title: 'Hubo un error al guardar la consulta', icon: 'warning', text: 'Intenta nuevamente'});
    }
  }

}
