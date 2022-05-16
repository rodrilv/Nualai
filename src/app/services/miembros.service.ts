import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MiembrosService {
  private devUrl: String = environment.devUrl;
  miembros = [];
  constructor(private http: HttpClient) {}

  async getMiembros() {
    this.miembros = [];
    Swal.fire({
      title: 'Cargado... Sé paciente!',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    try {
      return await this.http
        .get(`${this.devUrl}obtener-miembros`)
        .toPromise()
        .then((result: any) => {
          this.miembros.push(result);
          //this.miembros = result;
          //console.log(this.miembros);

          this.closeSwal(true);
        });
    } catch (err) {
      this.closeSwal(true);
      Swal.fire({
        title: 'Hubo un error',
        icon: 'error',
        toast: true,
      });
    }
  }

  async eliminarMiembro(id: any) {
    Swal.fire({
      title: '¿Estás seguro de DAR DE BAJA al Miembro?',
      text: 'Esta acción es irreversible',
      icon: 'error',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'No',
      denyButtonText: `Si`,
      toast: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Ufff!',
          text: 'El Miembro está a salvo...',
          icon: 'success',
          toast: true,
        });
      } else if (result.isDenied) {
        let del: any = await this.http
          .delete(`${this.devUrl}eliminar-miembro/${id}`)
          .toPromise();
        if (del.ok) {
          Swal.fire({ title: 'Eliminado', icon: 'warning', toast: true }).then(
            async () => {
              await this.getMiembros();
            }
          );
        } else {
          Swal.fire({
            title: 'Hubo un error al eliminar el Miembro',
            icon: 'error',
            toast: true,
          });
        }
      }
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
