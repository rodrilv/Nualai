import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private devUrl = environment.devUrl;
  constructor(private http: HttpClient) { }

  async getConsultas(){
    return await this.http.get(`${this.devUrl}miembros/obtener-consultas`);
  }
}
