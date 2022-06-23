import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private devUrl = environment.devUrl;
  public recetas = [];
  public receta: any;
  constructor(
    private http: HttpClient,
  ) { }

  async savePrescription(prescription: any){
    return await this.http.post(`${this.devUrl}miembros/guardar-receta`, prescription).toPromise();
  }
  async getPrescriptions(uid: any){
    return await this.http.get(`${this.devUrl}miembros/obtener-recetas/${uid}`).toPromise();
  }
  async getPrescription(uid: any, rid: any){
    return await this.http.get(`${this.devUrl}miembros/obtener-receta/${uid}/${rid}`).toPromise();
  }
}
