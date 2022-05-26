import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  private devUrl: any = environment.devUrl;
  _id: any;
  miembro: any;

  constructor(
    private http: HttpClient,
  ) { }

  async getMemberFollowing(){
    return await this.http.get(`${this.devUrl}miembros/obtener-miembro/${this._id}`).toPromise();
  }


}
