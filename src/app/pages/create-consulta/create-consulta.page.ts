import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Consultas } from 'src/app/models/consultas/consultas';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-consulta',
  templateUrl: './create-consulta.page.html',
  styleUrls: ['./create-consulta.page.scss'],
})
export class CreateConsultaPage implements OnInit {
  sesion: number;
  hora: number;
  minutos: number;
  horario: string;
  public consulta: Consultas;
  public fecha: any;
  constructor(
    private modal: ModalController,
    public seguimientoService: SeguimientoService,
    public consultaService: ConsultasService
  ) {
    this.sesion = parseInt(this.consultaService.autoIncrementConsultas) + 1;
    this.consulta = new Consultas();
    this.consulta.consulta.general.user_id = this.seguimientoService._id;
    this.consulta.consulta.general.nombre = this.seguimientoService.miembro.datosGenerales.nombres+" "+this.seguimientoService.miembro.datosGenerales.apellidos
  }

  ngOnInit() {}

  async saveConsulta() {
    try{
    let fechaArray = this.fecha.split("-");
    this.consulta.consulta.general.fecha_consulta.day = fechaArray[2];
    this.consulta.consulta.general.fecha_consulta.month = fechaArray[1];
    this.consulta.consulta.general.fecha_consulta.year = fechaArray[0];
    this.consulta.consulta.general.hora = `${this.hora}:${this.minutos}`
    
    Swal.fire({
      title: 'Guardando Consulta...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.consultaService.saveConsulta(this.consulta);
    if(obj.ok == true){
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Consulta guardada.',
        icon: 'success',
      });
    }else{
      Swal.fire({
        toast: true,
        title: 'Hubo un error al procesar la consulta.',
        icon: 'warning',
      });
    }
    }catch(error){
      console.error("Invalid date format");
    }
    
    
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
