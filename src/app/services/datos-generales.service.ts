import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SeguimientoService } from './seguimiento.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DatosGeneralesService {
  devUrl: String = environment.devUrl;
  constructor(private http: HttpClient, private modal: ModalController, private router: Router, private seguimientoService: SeguimientoService) {}

  async registerMember(member: any) {
    return await this.http
    .post(`${this.devUrl}miembros/registrar`, member)
    .toPromise();
  }
  
}
