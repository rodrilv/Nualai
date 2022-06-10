import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { EntrevistaMedicaResultsModalPage } from 'src/app/results-modals/entrevista-medica-results-modal/entrevista-medica-results-modal.page';
import { EntrevistaNutricionalModalPage } from 'src/app/results-modals/entrevista-nutricional-modal/entrevista-nutricional-modal.page';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  constructor(
    private router: Router,
    public seguimientoService: SeguimientoService,
    private modal: ModalController
  ) {}

  async ngOnInit() {
    if(this.seguimientoService.miembro === undefined || this.seguimientoService.miembro === null){
      this.router.navigate(['/']);
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
}

