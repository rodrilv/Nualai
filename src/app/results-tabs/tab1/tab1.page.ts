import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  Editor = ClassicEditor;
  constructor(public seguimientoService: SeguimientoService, public consultasService: ConsultasService) { 
   }

  ngOnInit() {
  }

}
