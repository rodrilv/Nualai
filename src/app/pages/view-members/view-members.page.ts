import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.page.html',
  styleUrls: ['./view-members.page.scss'],
})
export class ViewMembersPage implements OnInit {
  members: any;
  text: any;
  

  constructor(private modal: ModalController, private miembroService: MiembrosService, private router: Router) { }

  async ngOnInit() {
    await this.miembroService.getMiembros();
    this.members = this.miembroService.miembros[0].members;
  }

  async eliminarMiembro(id: any){
    await this.miembroService.eliminarMiembro(id);
  }

  buscarMiembro(event: any){
    console.log(event.detail.value);
    this.text = event.detail.value;
  }

  seguimiento(id: any){
    this.closeModal();
    this.router.navigate(['tabs']);
  }

  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}
