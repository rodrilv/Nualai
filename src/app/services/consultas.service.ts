import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  public consultas: any;
  public consultasMember:any;
  private devUrl = environment.devUrl;
  constructor(private http: HttpClient) { }

  async getConsultas(){
    return await this.http.get(`${this.devUrl}miembros/obtener-consultas`).toPromise();
  }
  async getConsultasMember(uid: string){
    return await this.http.get(`${this.devUrl}miembros/obtener-consultas-miembro/${uid}`).toPromise();
  }
  async saveConsulta(consulta: any){
    return await this.http.post(`${this.devUrl}miembros/crear-consulta`, consulta).toPromise();
  }
}
