import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  public cid: any;
  public consultas: any;
  public consultasMember:any;
  public consultaMember: any;
  public autoIncrementConsultas: any;
  private devUrl = environment.devUrl;
  constructor(private http: HttpClient) { }

  async getConsultas(){
    return await this.http.get(`${this.devUrl}miembros/obtener-consultas`).toPromise();
  }
  async getUltimaConsulta(id:any){
    return await this.http.get(`${this.devUrl}miembros/obtener-ultima-consulta/${id}`).toPromise();
  }
  async getConsultasMember(uid: string){
    return await this.http.get(`${this.devUrl}miembros/obtener-consultas-miembro/${uid}`).toPromise();
  }
  async getConsultaMember(cid: any){
    return await this.http.get(`${this.devUrl}miembros/obtener-consulta-miembro/${cid}`).toPromise();
  }
  async saveConsulta(consulta: any){
    return await this.http.post(`${this.devUrl}miembros/crear-consulta`, consulta).toPromise();
  }
  async savePlanAlimentacionConsulta(cid: any, plan: any){
    return await this.http.put(`${this.devUrl}miembros/agregar-plan-alimentacion-consulta/${cid}`, plan).toPromise();
  }
  async updateConsulta(cid: any,consulta: any){
    return await this.http.patch(`${this.devUrl}miembros/actualizar-consulta/${cid}`, consulta).toPromise();
  }
  async updateConsultaMedica(cid: any, update: any){
    return await this.http.put(`${this.devUrl}miembros/agregar-consulta-medica/${cid}`, update).toPromise();
  }
  async updateConsultaNutricional(cid: any, update: any){
    return await this.http.put(`${this.devUrl}miembros/agregar-consulta-nutricional/${cid}`, update).toPromise();
  }
  async updateConsultaFisioterapia(cid: any, update: any){
    return await this.http.put(`${this.devUrl}miembros/agregar-consulta-fisioterapia/${cid}`, update).toPromise();
  }
  async updateConsultaPsicologica(cid: any, update: any){
    return await this.http.put(`${this.devUrl}miembros/agregar-consulta-psicologica/${cid}`, update).toPromise();
  }
  async sendEmailRecordatory(userInfo: any, correo: any){
    return await this.http.post(`${this.devUrl}miembros/enviar-recordatorio/${correo}`, userInfo).toPromise();
  }
}
