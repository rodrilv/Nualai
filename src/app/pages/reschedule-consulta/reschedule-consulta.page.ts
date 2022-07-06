import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reschedule-consulta',
  templateUrl: './reschedule-consulta.page.html',
  styleUrls: ['./reschedule-consulta.page.scss'],
})
export class RescheduleConsultaPage implements OnInit {
  hora: any;
  minutos: any;
  fecha:any;
  constructor(
    private consultasService: ConsultasService
  ) { }

  ngOnInit() {
  }
  async updateConsulta(){
    Swal.fire({
      title: 'Reagendando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let fecha = this.fecha.split("-");
    let update = {
      fecha: fecha,
      hora: this.hora+":"+this.minutos,
    }
    let obj: any = await this.consultasService.updateConsulta(this.consultasService.cid, update);
    if(obj.ok == true){
      Swal.close();
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Consulta reagendada.'
      });
    }else{
      Swal.close();
      Swal.fire({
        toast: true,
        icon: 'warning',
        title: 'Hubo un error al reagendar la cita.',
        text: 'Prueba intentar nuevamente'
      });
    }
  }


}
