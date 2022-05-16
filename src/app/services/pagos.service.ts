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

  async pagarSemanalidades(pago: any) {
    Swal.fire({
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
              icon: 'warning',
              title: 'Realizando Pagos...',
              timerProgressBar: true,
              toast: true,
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });
            let subject: any = await this.http.patch(`${this.devUrl}pagar-semanas`, pago).toPromise();
            if(subject.ok){
              Swal.fire({
                toast: true,
                title: "PAGADO",
                text: "Los cambios se verán reflejados cuando entres nuevamente al módulo",
                icon: "success"
              });
            }else{
              Swal.fire({
                toast: true,
                title: "Hubo un error",
                text: "No se pudo realizar la transacción",
                icon: "error"
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
