import { Component } from '@angular/core';
import { DatosNutriologo } from '../models/datos-nutri';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public datosNutriologo: DatosNutriologo;
  public Editor = ClassicEditor;

  constructor() {
    this.datosNutriologo = new DatosNutriologo();
  }

  saveData(){
    console.log(this.datosNutriologo);
    
  }
  ckeditorOnChange(event: any){
    console.log(event);
    
  }

}
