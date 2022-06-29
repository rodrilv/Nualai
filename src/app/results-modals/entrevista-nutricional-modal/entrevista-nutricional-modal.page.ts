import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevista-nutricional-modal',
  templateUrl: './entrevista-nutricional-modal.page.html',
  styleUrls: ['./entrevista-nutricional-modal.page.scss'],
})
export class EntrevistaNutricionalModalPage implements OnInit {
  public plan_alimentacion = {
    plan_alimentacion: '',
  };
  public imc = parseFloat(this.seguimientoService.miembro.datosNutricionales.IMC);
  public Editor = ClassicEditor;
  constructor(
    public seguimientoService: SeguimientoService,
    private modal: ModalController,
    private router: Router,
    private miembroService: MiembrosService
  ) {
    this.plan_alimentacion.plan_alimentacion =
      '<p>&nbsp;</p><figure class="table"><table><tbody><tr><td rowspan="3">Desayuno</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Comida</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="2">Cena</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p>&nbsp;</p>';
  }

  ngOnInit() {
    if (
      this.seguimientoService.miembro == null ||
      this.seguimientoService.miembro == undefined
    ) {
      this.router.navigate(['/'], { replaceUrl: true });
    }
  }

  async guardarPlanAlimentacion() {
    Swal.fire({
      title: 'Cargado... Sé paciente!',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.miembroService.savePlanAlimentacion(
      this.plan_alimentacion,
      this.seguimientoService._id
    );
    if (obj.ok === true) {
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Plan de Alimentación guardado...',
        text: 'Los cambios se verán reflejados cuando vuelva a entrar al módulo.',
        icon: 'success',
      });
    } else {
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Hubo un error al guardar el plan',
        text: 'Pruebe con intentar nuevamente.',
        icon: 'error',
      });
    }
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}
