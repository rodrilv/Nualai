import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// At this point, now services will handle ONLY the requests and the data received,
// not like before, that service was in charge of all the process, including the conditions,
// which from now, is moved to the .ts file inside of each page/component (like it should be).
@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  private devUrl: string = environment.devUrl;
  public personal: any = [];

  constructor(private http: HttpClient) {}

  async registerPersonal(personal: any) {
    return await this.http
      .post(`${this.devUrl}personal/registrar-personal`, personal)
      .toPromise();
  }

  async getPersonal() {
    this.personal = [];
    return await this.http
      .get(`${this.devUrl}personal/obtener-personal`)
      .toPromise()
      .then((result: any) => {
        this.personal.push(result);
      });
  }

  async deletePersonal(id: any){
    return await this.http
    .delete(`${this.devUrl}personal/eliminar-personal/${id}`)
    .toPromise();
  }
}
