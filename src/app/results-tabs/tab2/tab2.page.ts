import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { Receta } from 'src/app/models/receta';
import { RecetaService } from 'src/app/services/receta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  fecha: any;
  public receta: Receta;
  Editor = ClassicEditor;
  constructor(public seguimientoService: SeguimientoService, private recetaService: RecetaService) { 
    this.receta = new Receta();
    this.receta.receta.member_id = this.seguimientoService.miembro._id;
  }
  ngOnInit() {
    console.log(this.receta.receta.member_id);
  }

  async guardarReceta(){
    let fecha = this.fecha.split("-");
    this.receta.receta.fecha_receta.day = fecha[2];
    this.receta.receta.fecha_receta.month = fecha[1];
    this.receta.receta.fecha_receta.year = fecha[0];
    
    Swal.fire({
      toast: true,
      icon: 'info',
      title:
        'Revise muy bien la receta antes de proceder...',
      text: '¿Desea continuar y guardar la receta?',
      showConfirmButton: true,
      showDenyButton: true,
      denyButtonText: 'Volver a receta',
      confirmButtonText: 'Guardar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Guardando...',
          toast: true,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          showConfirmButton: false,
        });
        let obj: any = await this.recetaService.savePrescription(
          this.receta
        );
        if (obj.ok === true) {
          this.closeSwal(true);
          Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Receta Guardada',
          });
        } else {
          this.closeSwal(true);
          Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Hubo un error al guardar la receta',
          });
        }
      } else {
        this.closeSwal(true);
      }
    });

  }
  deleteText(){
    this.receta.receta.receta = "";
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }

}
