import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  private devUrl: string = environment.devUrl;
  constructor(private http: HttpClient) {}

  async pagarMensualidades(id: any, pago: any) {
    Swal.fire({
      //Aviso: Cobro de Mensualidades
      icon: 'warning',
      toast: true,
      title: 'AVISO',
      text: 'Estás a punto de cobrar las mensualidades seleccionadas.',
      showConfirmButton: true,
      confirmButtonText: '¿Continuar?',
      confirmButtonColor: 'green',
      showDenyButton: true,
      denyButtonColor: 'red',
      denyButtonText: 'CANCELAR',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          //Recibe la cantidad
          timerProgressBar: true,
          toast: true,
          title: 'OPERACIÓN',
          text: `Reciba por favor la cantidad de: $${pago.total}.00 PESOS MXN. Si ya se ha recibido este pago por transferencia, por favor continúe.`,
          showConfirmButton: true,
          confirmButtonText: 'PAGAR',
          confirmButtonColor: 'green',
          showDenyButton: true,
          denyButtonColor: 'red',
          denyButtonText: 'CANCELAR',
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(async (result) => {
          if (result.isConfirmed) {
            this.closeSwal(true);
            Swal.fire({
              // Realizando Pago...
              icon: 'warning',
              title: 'Realizando Pagos...',
              timerProgressBar: true,
              toast: true,
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });
            let subject: any = await this.http
              .patch(`${this.devUrl}pagar-mensualidades/${id}`, pago)
              .toPromise();
            if (subject.ok) {
              console.log(subject.updDB);
              Swal.fire({
                //Pagado
                toast: true,
                title: 'PAGADO',
                text: 'Los cambios se verán reflejados cuando entres nuevamente al módulo',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: 'Enviar Recibo',
                confirmButtonColor: 'green',
                showCancelButton: true,
                cancelButtonText: 'OK',
              }).then(async (result) => {
                if (result.isConfirmed) {
                  this.enviarRecibo(pago);
                } 
              });
            } else {
              Swal.fire({
                toast: true,
                title: 'Hubo un error',
                text: 'No se pudo realizar la transacción',
                icon: 'error',
              });
            }
          } else {
            this.swalCancel();
          }
        });
      } else if (result.isDenied) {
        this.swalCancel();
      }
    });
  }

  async enviarRecibo(pago: any) {
    Swal.fire({
      title: 'Enviando Recibo',
      timerProgressBar: true,
      toast: true,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    let subject: any = await this.http
      .post(`${this.devUrl}enviar-recibo`, pago)
      .toPromise();
    if (subject.ok) {
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Todo Listo',
        text: 'Puede salir del Módulo...',
        icon: 'success',
      });
    } else {
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Hubo un error...',
        text: 'No se pudo enviar el recibo. ¿Deseas intentar nuevamente?',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonColor: 'green',
        confirmButtonText: 'Si',
        showCancelButton: true,
        cancelButtonText: 'No es necesario...',
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.enviarRecibo(pago);
        } else {
          Swal.fire({
            toast: true,
            title: 'AVISO',
            text: 'No se envió el recibo, pero el pago ya está confirmado. Puede salir del módulo.',
            icon: 'warning',
            showConfirmButton: true,
          });
        }
      });
    }
  }

  swalCancel() {
    Swal.fire({
      toast: true,
      icon: 'warning',
      title: 'OPERACIÓN CANCELADA',
      text: 'La operación de cobro fué cancelada, sal del módulo y vuelve a entrar para reiniciar.',
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
