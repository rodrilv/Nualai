import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  private devUrl: string = environment.devUrl;
  constructor(private http: HttpClient,) {}

  async pagarSemanalidades(pago: any){
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
      denyButtonText: 'CANCELAR'
    }).then( (result) =>{
      if(result.isConfirmed){
        Swal.fire({

        })
      }else if(result.isDenied){
        Swal.fire({
          toast: true,
          icon: 'warning',
          title: 'OPERACIÓN CANCELADA',
          text: 'La operación de cobro fué cancelada, sal del módulo y vuelve a entrar para reiniciar.'

        })
      }
    })
    await this.http.patch(`${this.devUrl}pagar-semanas`,pago).toPromise();
  }
}
