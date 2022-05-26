import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DatosGeneralesService {
  devUrl: String = environment.devUrl;
  constructor(private http: HttpClient, private modal: ModalController) {
    
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
        this.closeModal();
      } else {
        Swal.fire({
          title: 'Este error puede ser normal, intenta el registro nuevamente!',
          icon: 'warning',
          confirmButtonColor: 'green',
          toast: true
        });
      }
    } catch (err) {
      this.closeSwal(true);
      Swal.fire({
        title: 'Hubo un error durante la operación...',
        icon: 'error',
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
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
}
