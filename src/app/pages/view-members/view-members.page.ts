import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.page.html',
  styleUrls: ['./view-members.page.scss'],
})
export class ViewMembersPage implements OnInit {
  members: any;
  text: any;
  

  constructor(
    private modal: ModalController, 
    public miembroService: MiembrosService, 
    private router: Router,
    private seguimientoService: SeguimientoService
    ) { }

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

  async seguimiento(id: any){
    this.closeModal();
    this.seguimientoService._id = id;
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false
    });
    let obj: any = await this.seguimientoService.getMemberFollowing();
    if(obj.ok){
      this.seguimientoService._id = obj?.member._id;
      this.seguimientoService.miembro = obj?.member;
      this.router.navigate(['tabs']);
      this.closeSwal(true);
    }else{
      this.closeSwal(true);
      Swal.fire({toast: true, icon: 'error', title:'Hubo un error!'})
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
