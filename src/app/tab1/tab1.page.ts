import { Component } from '@angular/core';
import { DatosMedicos } from '../models/datos-medicos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public datosMedicos: DatosMedicos;

  constructor() {
    this.datosMedicos = new DatosMedicos();
  }

  ngOnInit() {
    
  }
  saveData(){
    console.log(this.datosMedicos);
    
  }
}