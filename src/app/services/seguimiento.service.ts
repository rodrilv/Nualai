import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DatosMedicos } from '../models/datos-medicos';
import { DatosNutriologo } from '../models/datos-nutri';

@Injectable({
  providedIn: 'root',
})
export class SeguimientoService {
  private devUrl: any = environment.devUrl;
  public _id: any;
  public miembro: any;
  public datosMedicos: DatosMedicos;
  public datosNutricionales: DatosNutriologo;

  constructor(private http: HttpClient) {
    this.datosMedicos = new DatosMedicos();
    this.datosNutricionales = new DatosNutriologo();
  }

  async getMemberFollowing(id: any) {
    return await this.http
      .get(`${this.devUrl}miembros/obtener-miembro/${id}`)
      .toPromise();
  }
  async saveDatosMedicosInterview(id: any, datosMedicos: any) {
    return await this.http
      .put(`${this.devUrl}miembros/agregar-datos-medicos/${id}`, datosMedicos)
      .toPromise();
  }
  async saveDatosNutricionalesInterview(id: any, datosNutricionales: any) {
    return await this.http
      .put(
        `${this.devUrl}miembros/agregar-datos-nutricionales/${id}`,
        datosNutricionales
      )
      .toPromise();
  }
}
