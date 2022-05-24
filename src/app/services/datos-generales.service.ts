import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DatosGeneralesService {
  devUrl: String = environment.devUrl;
  constructor(public http: HttpClient,) {
    
  }

  async registerMember(member: any) {
    Swal.fire({
      title: 'Registrando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false
    });
    try {
      let subject: any = await this.http
        .post(`${this.devUrl}miembros/registrar`, member)
        .toPromise();
      if (subject.ok == true) {
        this.closeSwal(subject.ok);
        Swal.fire({
          title: 'Registrado Exitosamente!',
          icon: 'success',
          confirmButtonColor: 'green',
          toast: true
        });
      } else {
        Swal.fire({
          title: 'Hubo un error durante la operación...',
          icon: 'warning',
          confirmButtonColor: 'green',
          toast: true
        });
      }
    } catch (err) {
      this.closeSwal(true);
      Swal.fire({
        title: 'Hubo un error durante la operación...',
        icon: 'warning',
        confirmButtonColor: 'green',
        toast: true
      });
    }
  }

  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
