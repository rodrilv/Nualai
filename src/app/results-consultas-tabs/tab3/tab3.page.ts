import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  Editor = ClassicEditor;
  constructor(public consultasService: ConsultasService) { }

  ngOnInit() {
  }

}
