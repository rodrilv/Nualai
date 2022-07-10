import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { SeguimientoService } from '../../services/seguimiento.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-member-followings',
  templateUrl: './view-member-followings.page.html',
  styleUrls: ['./view-member-followings.page.scss'],
})
export class ViewMemberFollowingsPage implements OnInit, AfterViewInit {
  public text: any;
  public date: any;
  public month: any;
  public members: any;
  public formFlag: any;

  constructor(
    private modal: ModalController,
    public miembroService: MiembrosService,
    public seguimientoService: SeguimientoService,
    public consultasService: ConsultasService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.date = new Date().getDate();
    this.month = new Date().getMonth() + 1;
  }

  async ngOnInit() {
    await this.miembroService.getMiembros();
    this.members = this.miembroService.miembros[0].members;
  }
  ngAfterViewInit(): void {
    this.formFlag = 2;
    this.ngOnInit();
    this.cd.detectChanges();
  }
  async seguimiento(id: any) {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.seguimientoService.getMemberFollowing(id);
    if (obj.ok) {
      this.seguimientoService.miembro = {};
      this.seguimientoService._id = obj?.member._id;
      this.seguimientoService.miembro = obj?.member;
      this.router.navigate(['following']);

      this.closeSwal(true);
      this.closeModal();
    } else {
      this.closeSwal(true);
      Swal.fire({ toast: true, icon: 'error', title: 'Hubo un error!' });
    }
  }
  async getConsultas() {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.consultasService.getConsultas();
    if (obj.ok == true) {
      this.closeSwal(true);
      this.consultasService.consultas = obj.consultas;
    } else {
      this.closeSwal(true);
      Swal.fire({
        toast: true,
        title: 'Hubo un error al obtener las consultas',
        icon: 'warning',
      });
    }
  }

  buscarMiembro(event: any) {
    this.text = event.detail.value;
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

  async changeFlag(event: any) {
    
    this.formFlag = event.detail.value;
    if (this.formFlag == 2) {
      this.ngOnInit();
      
    } else {
      await this.getConsultas();
    }
  }
  async updateConsulta(cid: any) {
    this.consultasService.cid = cid;
    this.router.navigate(['reschedule-consulta'], { replaceUrl: true });
    this.closeModal();
  }

  async startConsulta(cid: any, id: any, sesion: any) {
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
    let obj2: any = await this.seguimientoService.getMemberFollowing(id);
    if (obj2.ok == true) {
      this.seguimientoService.miembro = {};
      this.seguimientoService._id = obj2?.member._id;
      this.seguimientoService.miembro = obj2?.member;
    }
    if (obj.ok === true) {
      this.consultasService.consultaMember = obj.consulta;
      this.closeSwal(true);
      if (sesion == 'Entrevista') {
        this.router.navigate(['tabs']);
      } else {
        this.router.navigate(['consultas-tabs/tab1']);
      }
      this.closeModal();
    } else {
      Swal.fire({
        toast: true,
        title: 'Hubo un error al obtener la inforación necesaria...',
        text: 'Intenta nuevamente',
        icon: 'warning',
      });
      this.closeSwal(true);
    }
  }
}
