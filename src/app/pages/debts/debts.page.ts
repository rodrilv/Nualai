import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {
  formFlag: boolean = false;
  buttonFlag: boolean = false;
  members: any;
  text: any;
  private mensualidad = 365;
  total: number = 0;
  meses = [];
  private mb: any;
  private folio: any;

  constructor(
    private modal: ModalController,
    public miembroService: MiembrosService,
    public pagoService: PagosService
  ) {}

  async ngOnInit() {
    await this.miembroService.getMiembros();
    this.members = this.miembroService.miembros[0].members;
  }

  calcularMensualidades(event: any, mb: any, folio: any) {
    this.mb = mb;
    this.folio = folio;
    if (event.detail.checked === true) {
      this.total += this.mensualidad;
      this.meses.push(event.detail.value);
      this.formFlag = true;
    } else if (event.detail.checked === false) {
      this.total -= this.mensualidad;
      for (let i = 0; i < this.meses.length; i++) {
        if (this.meses[i] === event.detail.value) {
          this.meses.splice(i, 1);
        }
      }
    }
    console.log(this.total);
    console.log(this.meses);
  }


  async pagarMensualidades(id: any) {
    let mensualidades = [];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let f = new Date();
    let d = `${f.getDate()}/${meses[f.getMonth()]}/${f.getFullYear()}`;
    this.formFlag = true;
    this.buttonFlag = true;
    for (let i = 0; i < this.meses.length; i++) {
      let item = {
        nombre: `${this.mb.datosGenerales.nombres+" "+this.mb.datosGenerales.apellidos}`,
        correo: this.mb.datosGenerales.correo,
        folio: this.folio,
        mes: this.meses[i],
        fecha: d,
        status: 'PAGADO',
      };
      mensualidades.push(item);
    }
    let pago = {
      datosPago: {
        mensualidades: mensualidades,
      },
      total: this.total,
    };
    await this.pagoService.pagarMensualidades(id, pago);
  }
  buscarMiembro(event: any) {
    console.log(event.detail.value);
    this.text = event.detail.value;
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
}
