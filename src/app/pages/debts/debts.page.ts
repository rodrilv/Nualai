import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { PagosService } from 'src/app/services/pagos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {
  formFlag: boolean = false; // Flag that defines the form status (enabled, disabled)
  buttonFlag: boolean = false; // Flag that defines the button status (enabled, disabled)
  members: any; // Main array of objects, receives the members from the API
  text: any; // Text that works as a filter, it is sent to a pipe in order to search objects by ID.
  mensualidad: any = 0; // This defines the price, receives an event, if not received, it remains as  0 by default.
  descuento: any = 0; // This defines a discount, receives an event, if not received, it remains as  0 by default.
  total: number = 0; // This defines the total amount, result of the price and a discount.
  meses = []; // This array defines as a text the amout of moths to be paid, useless now cuz' requirements changed, but NECESARY TO OPERATE
  private mb: any; // This object receives the individual member in order to update the payment.
  private folio: any; // This variable is necesary to generate an invoice.

  constructor(
    private modal: ModalController,
    public miembroService: MiembrosService,
    public pagoService: PagosService
  ) {}

  async ngOnInit() {
    await this.miembroService.getMiembros(); //
    this.members = this.miembroService.miembros[0].members;
  }

  calcularMensualidades(event: any, mb: any, folio: any) {
    if (event.detail.checked === true && this.mensualidad != 0) {
      this.buttonFlag = true;
      this.mb = mb;
      this.folio = folio;
      //this.total += this.mensualidad;
      this.calcularPrecio();
      this.meses.push(event.detail.value);
      this.formFlag = true;
    } else if (event.detail.checked === false) {
      //this.total -= this.mensualidad;
      for (let i = 0; i < this.meses.length; i++) {
        if (this.meses[i] === event.detail.value) {
          this.meses.splice(i, 1);
        }
      }
    }
  }
  calcularPrecio() {
    this.mensualidad = this.mensualidad.detail.value;
    if (this.descuento <= 0) {
      this.total = this.mensualidad;
    } else if (this.descuento > 100) {
      Swal.fire({
        toast: true,
        title: 'No existe tal cantidad para el descuento',
        icon: 'error',
      });
    } else {
      this.descuento = this.descuento.detail.value;
      this.total =
        this.mensualidad - this.mensualidad * (this.descuento * 0.01);
    }
  }

  async pagarMensualidades(id: any) {
    let mensualidades = [];
    let meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    let f = new Date();
    let d = `${f.getDate()}/${meses[f.getMonth()]}/${f.getFullYear()}`;
    this.formFlag = true;
    this.buttonFlag = false;
    for (let i = 0; i < this.meses.length; i++) {
      let item = {
        nombre: `${
          this.mb.datosGenerales.nombres +
          ' ' +
          this.mb.datosGenerales.apellidos
        }`,
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
      monto: this.mensualidad,
      descuento: this.descuento,
      total: this.total,
    };
    await this.pagoService.pagarMensualidades(id, pago);
  }
  buscarMiembro(event: any) {
    
    this.text = event.detail.value;
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
}
