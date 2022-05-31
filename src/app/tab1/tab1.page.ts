import { Component } from '@angular/core';
import { DatosMedicos } from '../models/datos-medicos';
import { SeguimientoService } from '../services/seguimiento.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public datosMedicos: DatosMedicos;
  public Editor = ClassicEditor;

  constructor(public seguimientoService: SeguimientoService) {
    this.datosMedicos = new DatosMedicos();
  }

  ngOnInit() {
    
  }
  saveData(){
    console.log(this.datosMedicos);
    
  }

  deleteText(){
    
  }
}