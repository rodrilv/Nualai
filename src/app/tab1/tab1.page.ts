import { Component } from '@angular/core';
import { Miembro } from '../models/miembro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  

  constructor(public miembro1 : Miembro) {
    this.miembro1 = new Miembro();
  }

  ngOnInit() {
    this.miembro1._id="180270";
    this.miembro1.datosGenerales.nombres = "12";

    console.log(this.miembro1);
  }
}