import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { EntrevistaMedicaResultsModalPage } from 'src/app/results-modals/entrevista-medica-results-modal/entrevista-medica-results-modal.page';
import { EntrevistaNutricionalModalPage } from 'src/app/results-modals/entrevista-nutricional-modal/entrevista-nutricional-modal.page';
import { EntrevistaPsicologicaResultsModalPage } from 'src/app/results-modals/entrevista-psicologica-results-modal/entrevista-psicologica-results-modal.page';
import { EntrevistaFisioterapiaResultsModalPage } from 'src/app/results-modals/entrevista-fisioterapia-results-modal/entrevista-fisioterapia-results-modal.page';
import { RecetaService } from 'src/app/services/receta.service';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  private uid: any;

  constructor(
    private router: Router,
    public seguimientoService: SeguimientoService,
    private modal: ModalController,
    public recetaService: RecetaService,
    public consultasService: ConsultasService,
  ) {
    this.uid = this.seguimientoService._id
  }

  async ngOnInit() {
    if(!this.checkMemberAvailabilty()){
      Swal.fire({
        title: 'Cargando...',
        toast: true,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false,
      });
      this.getRecetas();
      //this.getConsultas();
      this.closeSwal(true);
    }
    

  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
  async openViewEntrevistaMedicaResults(){
    const modal = await this.modal.create({
      component: EntrevistaMedicaResultsModalPage
    });
    return await modal.present();
  }
  async openViewEntrevistaNutricionalResults(){
    const modal = await this.modal.create({
      component: EntrevistaNutricionalModalPage
    });
    return await modal.present();
  }
  async openViewEntrevistaPsicoResults(){
    const modal = await this.modal.create({
      component: EntrevistaPsicologicaResultsModalPage
    });
    return await modal.present();
  }
  async openViewEntrevistaFisioterapiaResults(){
    const modal = await this.modal.create({
      component: EntrevistaFisioterapiaResultsModalPage
    });
    return await modal.present();
  }
  async getRecetas(){
    this.recetaService.recetas = [];
    let obj: any = await this.recetaService.getPrescriptions(this.uid);
    this.recetaService.recetas.push(obj.prescripts);
    console.log(this.recetaService.recetas);
  }
  async getConsultas(){
    let obj: any = await this.consultasService
  }
  checkMemberAvailabilty(): boolean{
    if(this.seguimientoService.miembro === undefined || this.seguimientoService.miembro === null){
      this.router.navigate(['/'], { replaceUrl: true});
      return true;
    }else{
      return false;
    }
  }
}

