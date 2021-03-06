import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { EntrevistaMedicaResultsModalPage } from 'src/app/results-modals//entrevistas-results-modals/entrevista-medica-results-modal/entrevista-medica-results-modal.page';
import { EntrevistaNutricionalModalPage } from 'src/app/results-modals/entrevistas-results-modals/entrevista-nutricional-modal/entrevista-nutricional-modal.page';
import { EntrevistaPsicologicaResultsModalPage } from 'src/app/results-modals/entrevistas-results-modals/entrevista-psicologica-results-modal/entrevista-psicologica-results-modal.page';
import { EntrevistaFisioterapiaResultsModalPage } from 'src/app/results-modals/entrevistas-results-modals/entrevista-fisioterapia-results-modal/entrevista-fisioterapia-results-modal.page';
import { RecetaService } from 'src/app/services/receta.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { CreateConsultaPage } from '../create-consulta/create-consulta.page';
import { PrescriptionsViewPage } from '../prescriptions-view/prescriptions-view.page';

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
    public consultasService: ConsultasService
  ) {
    this.uid = this.seguimientoService._id;
  }

  async ngOnInit() {
    if (!this.checkMemberAvailabilty()) {
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
      this.getConsultas();
      this.closeSwal(true);
    }
  }
  async openViewPrescription(id: any){
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.recetaService.getPrescription(this.seguimientoService._id, id);
    if(obj.ok == true){
      this.recetaService.receta = obj.prescript.receta;
      this.openViewPrescript();
      this.closeSwal(true);
    }else{
      Swal.fire({
        toast: true,
        title: 'Hubo un error al obtener la receta...',
        icon :'error',
        text: 'Prueba intentarlo de nuevo'
      })
    }

  }
  async openViewPrescript(){
    const modal = await this.modal.create({
      component: PrescriptionsViewPage
    });
    return await modal.present();
  }
  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
  async openViewCreateConsultas() {
    let obj: any = await this.consultasService.getUltimaConsulta(this.seguimientoService._id);
    this.consultasService.autoIncrementConsultas = obj.data[0]?.general?.sesion;
    if(this.consultasService.autoIncrementConsultas === undefined || this.consultasService.autoIncrementConsultas === '' || this.consultasService.autoIncrementConsultas === null ){
      this.consultasService.autoIncrementConsultas = 0;
    }
    
    const modal = await this.modal.create({
      component: CreateConsultaPage,
    });
    return await modal.present();
  }
  async openViewEntrevistaMedicaResults() {
    const modal = await this.modal.create({
      component: EntrevistaMedicaResultsModalPage,
    });
    return await modal.present();
  }
  openRouteEntrevistaNutricionalResults() {
    this.router.navigate(['entrevista-nutricional-results']);
  }
  async openViewEntrevistaNutricionalResults() {
    const modal = await this.modal.create({
      component: EntrevistaNutricionalModalPage,
    });
    return await modal.present();
  }
  async openViewEntrevistaPsicoResults() {
    const modal = await this.modal.create({
      component: EntrevistaPsicologicaResultsModalPage,
    });
    return await modal.present();
  }
  async openViewEntrevistaFisioterapiaResults() {
    const modal = await this.modal.create({
      component: EntrevistaFisioterapiaResultsModalPage,
    });
    return await modal.present();
  }
  async getRecetas() {
    this.recetaService.recetas = [];
    let obj: any = await this.recetaService.getPrescriptions(this.uid);
    this.recetaService.recetas.push(obj.prescripts);
    
  }
  async getConsultas() {
    this.consultasService.consultasMember = [];
    let obj: any = await this.consultasService.getConsultasMember(this.uid);
    this.consultasService.consultasMember.push(obj.consultas);
    
  }
  async showResults(id: any) {
    this.consultasService.consultaMember = {};
    let obj: any = await this.consultasService.getConsultaMember(id);
    if(obj.ok == true){
      this.consultasService.consultaMember = obj.consulta;
      
      this.router.navigate(['results-consultas-tabs/tab1']);
    }
    
  }
  async startConsulta(cid: any, sesion: any) {
    this.consultasService.cid = cid;
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.consultasService.getConsultaMember(cid);
    if (obj.ok === true) {
      this.consultasService.consultaMember = obj.consulta;
      
      this.closeSwal(true);
      if (sesion == 'Entrevista') {
        this.router.navigate(['tabs']);
      } else {
        this.router.navigate(['consultas-tabs/tab1']);
      }
    } else {
      Swal.fire({
        toast: true,
        title: 'Hubo un error al obtener la inforaci??n necesaria...',
        text: 'Intenta nuevamente',
        icon: 'warning',
      });
      this.closeSwal(true);
    }
  }
  checkMemberAvailabilty(): boolean {
    if (
      this.seguimientoService.miembro === undefined ||
      this.seguimientoService.miembro === null
    ) {
      this.router.navigate(['/'], { replaceUrl: true });
      return true;
    } else {
      return false;
    }
  }
}
