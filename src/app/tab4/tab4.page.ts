import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from '../services/seguimiento.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatosPsicologicos } from '../models/datos-psicologicos';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public Editor = ClassicEditor;
  public datosPsicologicos: DatosPsicologicos = new DatosPsicologicos();

  constructor(public seguimientoService: SeguimientoService) { }

  ngOnInit() {
  }
  saveData(){

  }

}
