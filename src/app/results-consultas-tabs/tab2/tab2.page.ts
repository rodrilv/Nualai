import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  Editor = ClassicEditor;
  public imc = parseFloat(
    this.consultasService.consultaMember?.valoracion_nutricional?.IMC
  );
  public plan_alimentacion = {
    plan_alimentacion: '',
  };

  constructor(
    public consultasService: ConsultasService,
    public seguimientoService: SeguimientoService
  ) {
    this.plan_alimentacion.plan_alimentacion =
      '<p>&nbsp;</p><figure class="table"><table><tbody><tr><td rowspan="3">Desayuno</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Comida</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Cena</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p>&nbsp;</p>';
  }

  ngOnInit() {}
  async guardarPlan(id: any) {
    let obj: any = await this.consultasService.savePlanAlimentacionConsulta(
      id,
      this.plan_alimentacion
    );
    if (obj.ok == true) {
      Swal.fire({
        toast: true,
        title: 'Plan de Alimentación Guardado',
        icon: 'success',
      });
    } else {
      Swal.fire({
        toast: true,
        title: 'Hubo un error al guardar el plan de alimentación',
        icon: 'warning',
      });
    }
  }
}
